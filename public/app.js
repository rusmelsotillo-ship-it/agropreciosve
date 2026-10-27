// ============================================================
// AgroPreciosVE - Lógica del frontend
// ============================================================

const selectorMercado = document.getElementById('selector-mercado');
const selectorCategoria = document.getElementById('selector-categoria');
const selectorRubro = document.getElementById('selector-rubro');
const inputBuscar = document.getElementById('input-buscar');
const checkFavoritos = document.getElementById('check-favoritos');
const inputTasa = document.getElementById('input-tasa');
const btnActualizar = document.getElementById('btn-actualizar');
const btnTasa = document.getElementById('btn-tasa');
const resultado = document.getElementById('resultado');

let favoritos = JSON.parse(localStorage.getItem('agroprecios_favoritos')) || [];

const MAPA_MERCADOS = {
  "🌾 Puerta de Finca": "finca",
  "Coche (Caracas)": "coche",
  "Mercamara (Maracaibo)": "mercamara",
  "Mercabar (Barquisimeto)": "mercabar",
  "Tocuyito (Carabobo)": "tocuyito",
  "Makroval (Valera)": "valera",
  "San Cristóbal (Táchira)": "san_cristobal",
  "Mérida": "merida"
};

function normalizarTexto(texto) {
  return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

// ------------------------------------------------------------
// 1. Obtener tasa BCV
// ------------------------------------------------------------
async function obtenerTasaBCV() {
  if (btnTasa) {
    btnTasa.disabled = true;
    btnTasa.textContent = '⏳ Consultando...';
  }
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 8000);

  try {
    const resp = await fetch('/api/tasa-bcv', { signal: controller.signal });
    clearTimeout(timeoutId);
    const data = await resp.json();

    if (data.ok && data.tasa) {
      inputTasa.value = data.tasa.toFixed(2);
      if (btnTasa) {
        btnTasa.textContent = '✅ Actualizada';
        setTimeout(() => {
          btnTasa.textContent = '🔄 Actualizar tasa';
          btnTasa.disabled = false;
        }, 2000);
      }
    } else {
        throw new Error(data.error || 'Respuesta inválida');
    }
  } catch (error) {
    clearTimeout(timeoutId);
    if (btnTasa) {
      btnTasa.textContent = '⚠️ Manual';
      setTimeout(() => {
        btnTasa.textContent = '🔄 Actualizar tasa';
        btnTasa.disabled = false;
      }, 2000);
    }
  }
}

// ------------------------------------------------------------
// 2. Cargar selectores y filtros
// ------------------------------------------------------------
function cargarMercados() {
  selectorMercado.innerHTML = '';
  DATOS_AGRO.mercados.forEach(m => {
    const opt = document.createElement('option');
    opt.value = m.nombre;
    opt.textContent = m.nombre;
    selectorMercado.appendChild(opt);
  });
  
  // Dejar "Puerta de Finca" seleccionado por defecto
  selectorMercado.value = "🌾 Puerta de Finca";
}

function cargarCategorias() {
  selectorCategoria.innerHTML = '<option value="">Todas las categorías</option>';
  DATOS_AGRO.categorias.forEach(cat => {
    const opt = document.createElement('option');
    opt.value = cat;
    opt.textContent = cat;
    selectorCategoria.appendChild(opt);
  });
}

function cargarRubros() {
  const categoriaFiltro = selectorCategoria.value;
  const textoBusqueda = normalizarTexto(inputBuscar.value);
  const soloFavoritos = checkFavoritos.checked;

  let filtrados = DATOS_AGRO.rubros;

  if (soloFavoritos) {
    filtrados = filtrados.filter(r => favoritos.includes(r.id));
  }
  if (categoriaFiltro) {
    filtrados = filtrados.filter(r => r.categoria === categoriaFiltro);
  }
  if (textoBusqueda) {
    filtrados = filtrados.filter(r => normalizarTexto(r.nombre).includes(textoBusqueda));
  }

  selectorRubro.innerHTML = '<option value="">-- Selecciona un rubro --</option>';
  filtrados.forEach(r => {
    const opt = document.createElement('option');
    opt.value = r.id;
    opt.textContent = (favoritos.includes(r.id) ? '⭐ ' : '') + r.nombre;
    selectorRubro.appendChild(opt);
  });

  return filtrados;
}

// ------------------------------------------------------------
// 3. Lógica de precios y tarjeta
// ------------------------------------------------------------
function calcularPrecio(rubro, mercado) {
  if (mercado === 'todos') {
    const valores = Object.values(rubro.precios).filter(v => v > 0);
    if (valores.length === 0) return 0;
    const suma = valores.reduce((a, b) => a + b, 0);
    return +(suma / valores.length).toFixed(2);
  }
  const clave = MAPA_MERCADOS[mercado];
  if (!clave) return 0;
  return +(rubro.precios[clave] || 0).toFixed(2);
}

function mostrarEstimado(idRubro) {
  if (!idRubro) {
    resultado.innerHTML = '<p class="mensaje-inicial">Selecciona un rubro para ver el estimado.</p>';
    return;
  }

  const tasa = parseFloat(inputTasa.value) || DATOS_AGRO.tasa_bcv;
  const mercado = selectorMercado.value;
  const rubro = DATOS_AGRO.rubros.find(r => r.id === idRubro);

  if (!rubro) return;

  const precioUSD = calcularPrecio(rubro, mercado);
  const precioBs = +(precioUSD * tasa).toFixed(2);
  const etiquetaMercado = mercado === 'todos' ? 'Promedio nacional' : mercado;
  
  const esFavorito = favoritos.includes(rubro.id);
  const claseEstrella = esFavorito ? 'activo' : '';

  // Clase especial si el mercado es Finca para resaltarlo en verde
  const claseDestacado = mercado === '🌾 Puerta de Finca' ? 'destacado-finca' : '';

  const mercadosHTML = DATOS_AGRO.mercados.map(m => {
    const clave = MAPA_MERCADOS[m.nombre];
    const precio = rubro.precios[clave] || 0;
    const seleccionado = (mercado === m.nombre) ? ' seleccionado' : '';
    const precioTexto = precio > 0 ? `$${precio.toFixed(2)}` : '—';
    return `
      <li class="${seleccionado}">
        <span class="nombre-mercado">${m.nombre}</span>
        <span class="precio-mercado">${precioTexto}</span>
      </li>
    `;
  }).join('');

  // Generar texto para WhatsApp
  const precioFinca = rubro.precios.finca || 0;
  const precioBsFinca = +(precioFinca * tasa).toFixed(2);
  const textoWsp = encodeURIComponent(
    `🌾 *AgroPreciosVE* - ${rubro.nombre}\n\n` +
    `📍 *Precio a Puerta de Finca:* $${precioFinca.toFixed(2)}\n` +
    `💵 Equivalente: Bs ${precioBsFinca.toFixed(2)}\n` +
    `(Tasa BCV: ${tasa})\n\n` +
    `🏪 *Referencia Mayorista (${mercado !== 'todos' ? mercado : 'Promedio'}):* $${precioUSD.toFixed(2)}\n\n` +
    `_Consulte más precios en AgroPreciosVE_`
  );

  resultado.innerHTML = `
    <div class="tarjeta-rubro">
      <button class="btn-estrella ${claseEstrella}" data-id="${rubro.id}" title="Guardar en favoritos">★</button>
      
      <p class="categoria-etiqueta">${rubro.categoria}</p>
      <h2>${rubro.nombre}</h2>
      <p class="unidad">Unidad: ${rubro.unidad}</p>
      <p class="mercado-referencia">📍 ${etiquetaMercado}</p>

      <div class="precio-principal ${claseDestacado}">
        <span class="usd">$${precioUSD.toFixed(2)}</span>
        <span class="bs">Bs ${precioBs.toFixed(2)}</span>
      </div>

      <h3 class="titulo-mercados">Precios por mercado</h3>
      <ul class="mercados">
        ${mercadosHTML}
      </ul>

      <p class="fecha-actualizacion">
        Fecha de datos: ${rubro.fecha || 'sin fecha'} · Tasa: ${tasa} Bs/USD
      </p>
      <p class="fecha-actualizacion">⚠️ Precio estimado de referencia.</p>

      <a href="https://wa.me/?text=${textoWsp}" target="_blank" class="btn-wsp">📲 Compartir por WhatsApp</a>
    </div>
  `;

  const btnEstrella = document.querySelector('.btn-estrella');
  if (btnEstrella) {
    btnEstrella.addEventListener('click', (e) => {
      toggleFavorito(e.target.dataset.id);
    });
  }
}

// ------------------------------------------------------------
// 4. Lógica de Favoritos
// ------------------------------------------------------------
function toggleFavorito(id) {
  if (favoritos.includes(id)) {
    favoritos = favoritos.filter(favId => favId !== id);
  } else {
    favoritos.push(id);
  }
  localStorage.setItem('agroprecios_favoritos', JSON.stringify(favoritos));
  
  mostrarEstimado(id);
  cargarRubros();
}

// ------------------------------------------------------------
// 5. Eventos
// ------------------------------------------------------------
selectorMercado.addEventListener('change', () => mostrarEstimado(selectorRubro.value));
selectorCategoria.addEventListener('change', () => {
  cargarRubros();
  selectorRubro.value = '';
  resultado.innerHTML = '<p class="mensaje-inicial">Selecciona un rubro para ver el estimado.</p>';
});

inputBuscar.addEventListener('input', () => {
  const rubrosFiltrados = cargarRubros();
  if (rubrosFiltrados.length > 0 && inputBuscar.value.length > 2) {
    const primerRubro = rubrosFiltrados[0];
    selectorRubro.value = primerRubro.id;
    mostrarEstimado(primerRubro.id);
  }
});

checkFavoritos.addEventListener('change', () => {
  cargarRubros();
  selectorRubro.value = '';
  resultado.innerHTML = '<p class="mensaje-inicial">Selecciona un rubro para ver el estimado.</p>';
});

selectorRubro.addEventListener('change', (e) => {
  mostrarEstimado(e.target.value);
  inputBuscar.value = '';
});

btnActualizar.addEventListener('click', () => mostrarEstimado(selectorRubro.value));
if (btnTasa) btnTasa.addEventListener('click', obtenerTasaBCV);

// ------------------------------------------------------------
// 6. Estadísticas (Visitas y Fecha)
// ------------------------------------------------------------
function iniciarEstadisticas() {
  try {
    let visitas = parseInt(localStorage.getItem('agroprecios_visitas')) || 0;
    visitas++;
    localStorage.setItem('agroprecios_visitas', visitas);
    if (document.getElementById('visit-counter')) {
      document.getElementById('visit-counter').textContent = `👁️ Visitas: ${visitas}`;
    }

    const ahora = new Date();
    const meses = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
    let horas = ahora.getHours();
    const ampm = horas >= 12 ? 'PM' : 'AM';
    horas = horas % 12;
    horas = horas ? horas : 12;
    let minutos = ahora.getMinutes();
    minutos = minutos < 10 ? '0' + minutos : minutos;

    if (document.getElementById('current-datetime')) {
      document.getElementById('current-datetime').textContent = 
        `📅 ${ahora.getDate()} ${meses[ahora.getMonth()]} ${ahora.getFullYear()} · 🕒 ${horas}:${minutos} ${ampm}`;
    }
  } catch (error) {
    console.log("Error estadísticas", error);
  }
}

// ------------------------------------------------------------
// 7. Inicio
// ------------------------------------------------------------
cargarMercados();
cargarCategorias();
cargarRubros();
inputTasa.value = DATOS_AGRO.tasa_bcv;
obtenerTasaBCV();
iniciarEstadisticas();