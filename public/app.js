// ============================================================
// AgroPreciosVE - Lógica del frontend
// ============================================================

const selectorMercado = document.getElementById('selector-mercado');
const selectorCategoria = document.getElementById('selector-categoria');
const selectorRubro = document.getElementById('selector-rubro');
const selectorCalidad = document.getElementById('selector-calidad');
const inputBuscar = document.getElementById('input-buscar');
const checkFavoritos = document.getElementById('check-favoritos');
const inputTasa = document.getElementById('input-tasa');
const btnActualizar = document.getElementById('btn-actualizar');
const btnTasa = document.getElementById('btn-tasa');
const resultado = document.getElementById('resultado');

let favoritos = JSON.parse(localStorage.getItem('agroprecios_favoritos')) || [];

const MAPA_MERCADOS = {
  "🌾 Puerta de Finca": "finca", "Coche (Caracas)": "coche", "Mercamara (Maracaibo)": "mercamara",
  "Mercabar (Barquisimeto)": "mercabar", "Tocuyito (Carabobo)": "tocuyito", "Makroval (Valera)": "valera",
  "San Cristóbal (Táchira)": "san_cristobal", "Mérida": "merida"
};

function normalizarTexto(texto) {
  return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

// ------------------------------------------------------------
// SISTEMA DE PESTAÑAS (Navegación)
// ------------------------------------------------------------
function cambiarPestana(pestana) {
  const vistaPrecios = document.getElementById('vista-precios');
  const vistaRegistro = document.getElementById('vista-registro');
  const btnPrecios = document.getElementById('tab-precios');
  const btnRegistro = document.getElementById('tab-registro');

  if (pestana === 'precios') {
    vistaPrecios.style.display = 'block';
    vistaRegistro.style.display = 'none';
    btnPrecios.classList.add('active');
    btnRegistro.classList.remove('active');
  } else {
    vistaPrecios.style.display = 'none';
    vistaRegistro.style.display = 'block';
    btnPrecios.classList.remove('active');
    btnRegistro.classList.add('active');
  }
}

// ------------------------------------------------------------
// CONEXIÓN A SUPABASE (Registro)
// ------------------------------------------------------------
const SUPABASE_URL = 'https://xfumgbxmjzognpscwxp.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhmdW1nYnhtanpvZ25wc2N3eGdwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTMxMjI1OTUsImV4cCI6MjEwODY5ODU5NX0.fyJOToOCLnfykOWtsqyQT0yNVjb2sctx4rlZnCA9i_w';
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

document.getElementById('form-registro').addEventListener('submit', async function(e) {
  e.preventDefault();

  const btnSubmit = this.querySelector('button[type="submit"]');
  btnSubmit.disabled = true;
  btnSubmit.textContent = '⏳ Guardando...';

  const nuevoUsuario = {
    tipo: document.getElementById('tipo-usuario').value,
    nombre: document.getElementById('nombre-registro').value,
    estado: document.getElementById('estado-registro').value,
    municipio: document.getElementById('municipio-registro').value,
    whatsapp: document.getElementById('whatsapp-registro').value,
    detalles: document.getElementById('detalles-registro').value
  };

  try {
    const { data, error } = await supabase.from('usuarios').insert([nuevoUsuario]);
    if (error) throw error;

    const msj = document.getElementById('mensaje-registro');
    msj.textContent = "¡Registro exitoso! Ya formas parte de la red.";
    msj.style.color = "var(--verde-medio)";
    msj.style.display = 'block';
    this.reset();
  } catch (error) {
    console.error("Error al registrar:", error.message);
    const msj = document.getElementById('mensaje-registro');
    msj.textContent = "Hubo un error al guardar. Intenta de nuevo.";
    msj.style.color = "red";
    msj.style.display = 'block';
  } finally {
    btnSubmit.disabled = false;
    btnSubmit.textContent = '✅ Registrarme';
    setTimeout(() => { document.getElementById('mensaje-registro').style.display = 'none'; }, 4000);
  }
});

// ------------------------------------------------------------
// OBTENER TASA BCV
// ------------------------------------------------------------
async function obtenerTasaBCV() {
  if (btnTasa) { btnTasa.disabled = true; btnTasa.textContent = '⏳ Consultando...'; }
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
        setTimeout(() => { btnTasa.textContent = '🔄 Actualizar tasa'; btnTasa.disabled = false; }, 2000);
      }
    } else { throw new Error('Respuesta inválida'); }
  } catch (error) {
    clearTimeout(timeoutId);
    if (btnTasa) {
      btnTasa.textContent = '⚠️ Manual';
      setTimeout(() => { btnTasa.textContent = '🔄 Actualizar tasa'; btnTasa.disabled = false; }, 2000);
    }
  }
}

// ------------------------------------------------------------
// CARGAR SELECTORES Y FILTROS
// ------------------------------------------------------------
function cargarMercados() {
  selectorMercado.innerHTML = '';
  DATOS_AGRO.mercados.forEach(m => {
    const opt = document.createElement('option');
    opt.value = m.nombre; opt.textContent = m.nombre;
    selectorMercado.appendChild(opt);
  });
  selectorMercado.value = "🌾 Puerta de Finca";
}

function cargarCategorias() {
  selectorCategoria.innerHTML = '<option value="">Todas las categorías</option>';
  DATOS_AGRO.categorias.forEach(cat => {
    const opt = document.createElement('option');
    opt.value = cat; opt.textContent = cat;
    selectorCategoria.appendChild(opt);
  });
}

function cargarRubros() {
  const categoriaFiltro = selectorCategoria.value;
  const textoBusqueda = normalizarTexto(inputBuscar.value);
  const soloFavoritos = checkFavoritos.checked;

  let filtrados = DATOS_AGRO.rubros;
  if (soloFavoritos) filtrados = filtrados.filter(r => favoritos.includes(r.id));
  if (categoriaFiltro) filtrados = filtrados.filter(r => r.categoria === categoriaFiltro);
  if (textoBusqueda) filtrados = filtrados.filter(r => normalizarTexto(r.nombre).includes(textoBusqueda));

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
// LÓGICA DE PRECIOS Y TARJETA
// ------------------------------------------------------------
function calcularPrecio(rubro, mercado, calidad) {
  let precioBase = 0;
  if (mercado === 'todos') {
    const valores = Object.values(rubro.precios).filter(v => v > 0);
    if (valores.length === 0) return 0;
    precioBase = valores.reduce((a, b) => a + b, 0) / valores.length;
  } else {
    const clave = MAPA_MERCADOS[mercado];
    if (!clave) return 0;
    precioBase = rubro.precios[clave] || 0;
  }
  if (calidad === 'segunda') return +(precioBase * 0.80).toFixed(2);
  if (calidad === 'golilla') return +(precioBase * 0.50).toFixed(2);
  return +precioBase.toFixed(2);
}

function mostrarEstimado(idRubro) {
  if (!idRubro) {
    resultado.innerHTML = '<p class="mensaje-inicial">Selecciona un rubro para ver el estimado.</p>';
    return;
  }

  const tasa = parseFloat(inputTasa.value) || DATOS_AGRO.tasa_bcv;
  const mercado = selectorMercado.value;
  const calidad = selectorCalidad.value;
  const rubro = DATOS_AGRO.rubros.find(r => r.id === idRubro);

  if (!rubro) return;

  const precioUSD = calcularPrecio(rubro, mercado, calidad);
  const precioBs = +(precioUSD * tasa).toFixed(2);
  const etiquetaMercado = mercado === 'todos' ? 'Promedio nacional' : mercado;
  
  let etiquetaCalidad = "Primera";
  if (calidad === 'segunda') etiquetaCalidad = "Segunda";
  if (calidad === 'golilla') etiquetaCalidad = "Golilla";

  const esFavorito = favoritos.includes(rubro.id);
  const claseEstrella = esFavorito ? 'activo' : '';
  const claseDestacado = mercado === '🌾 Puerta de Finca' ? 'destacado-finca' : '';

  const mercadosHTML = DATOS_AGRO.mercados.map(m => {
    const clave = MAPA_MERCADOS[m.nombre];
    const p = rubro.precios[clave] || 0;
    let pFinal = p;
    if (calidad === 'segunda') pFinal = p * 0.8;
    if (calidad === 'golilla') pFinal = p * 0.5;

    const seleccionado = (mercado === m.nombre) ? ' seleccionado' : '';
    const precioTexto = pFinal > 0 ? `$${pFinal.toFixed(2)}` : '—';
    return `<li class="${seleccionado}"><span class="nombre-mercado">${m.nombre}</span><span class="precio-mercado">${precioTexto}</span></li>`;
  }).join('');

  const textoWsp = encodeURIComponent(
    `🌾 *AgroPreciosVE* - ${rubro.nombre} (${etiquetaCalidad})\n\n` +
    `📍 *Precio seleccionado (${etiquetaMercado}):* $${precioUSD.toFixed(2)}\n` +
    `💵 Equivalente: Bs ${precioBs.toFixed(2)}\n(Tasa BCV: ${tasa})\n\n_Consulte más precios en AgroPreciosVE_`
  );

  resultado.innerHTML = `
    <div class="tarjeta-rubro">
      <button class="btn-estrella ${claseEstrella}" data-id="${rubro.id}">★</button>
      <p class="categoria-etiqueta">${rubro.categoria}</p>
      <h2>${rubro.nombre} <span style="font-size:0.7em; color:var(--texto-suave);">(${etiquetaCalidad})</span></h2>
      <p class="unidad">Unidad: ${rubro.unidad}</p>
      <p class="mercado-referencia">📍 ${etiquetaMercado}</p>
      <div class="precio-principal ${claseDestacado}">
        <span class="usd">$${precioUSD.toFixed(2)}</span>
        <span class="bs">Bs ${precioBs.toFixed(2)}</span>
      </div>
      <h3 class="titulo-mercados">Precios por mercado (${etiquetaCalidad})</h3>
      <ul class="mercados">${mercadosHTML}</ul>
      <p class="fecha-actualizacion">Fecha de datos: ${rubro.fecha || 'sin fecha'} · Tasa: ${tasa} Bs/USD</p>
      <p class="fecha-actualizacion">⚠️ Precio estimado de referencia.</p>
      <a href="https://wa.me/?text=${textoWsp}" target="_blank" class="btn-wsp">📲 Compartir por WhatsApp</a>
    </div>
  `;

  const btnEstrella = document.querySelector('.btn-estrella');
  if (btnEstrella) btnEstrella.addEventListener('click', (e) => toggleFavorito(e.target.dataset.id));
}

function toggleFavorito(id) {
  if (favoritos.includes(id)) favoritos = favoritos.filter(favId => favId !== id);
  else favoritos.push(id);
  localStorage.setItem('agroprecios_favoritos', JSON.stringify(favoritos));
  mostrarEstimado(id);
  cargarRubros();
}

// ------------------------------------------------------------
// EVENTOS
// ------------------------------------------------------------
selectorMercado.addEventListener('change', () => mostrarEstimado(selectorRubro.value));
selectorCalidad.addEventListener('change', () => mostrarEstimado(selectorRubro.value));

selectorCategoria.addEventListener('change', () => {
  cargarRubros(); selectorRubro.value = '';
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
  cargarRubros(); selectorRubro.value = '';
  resultado.innerHTML = '<p class="mensaje-inicial">Selecciona un rubro para ver el estimado.</p>';
});

selectorRubro.addEventListener('change', (e) => {
  mostrarEstimado(e.target.value);
  inputBuscar.value = '';
});

btnActualizar.addEventListener('click', () => mostrarEstimado(selectorRubro.value));
if (btnTasa) btnTasa.addEventListener('click', obtenerTasaBCV);

// ------------------------------------------------------------
// ESTADÍSTICAS (Visitas y Fecha)
// ------------------------------------------------------------
function iniciarEstadisticas() {
  try {
    let visitas = parseInt(localStorage.getItem('agroprecios_visitas')) || 0;
    visitas++;
    localStorage.setItem('agroprecios_visitas', visitas);
    if (document.getElementById('visit-counter')) document.getElementById('visit-counter').textContent = `👁️ Visitas: ${visitas}`;

    const ahora = new Date();
    const meses = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
    let horas = ahora.getHours(); const ampm = horas >= 12 ? 'PM' : 'AM';
    horas = horas % 12; horas = horas ? horas : 12;
    let minutos = ahora.getMinutes(); minutos = minutos < 10 ? '0' + minutos : minutos;

    if (document.getElementById('current-datetime')) {
      document.getElementById('current-datetime').textContent = `📅 ${ahora.getDate()} ${meses[ahora.getMonth()]} ${ahora.getFullYear()} · 🕒 ${horas}:${minutos} ${ampm}`;
    }
  } catch (error) { console.log("Error estadísticas", error); }
}

// ------------------------------------------------------------
// INICIO
// ------------------------------------------------------------
cargarMercados();
cargarCategorias();
cargarRubros();
inputTasa.value = DATOS_AGRO.tasa_bcv;
obtenerTasaBCV();
iniciarEstadisticas();