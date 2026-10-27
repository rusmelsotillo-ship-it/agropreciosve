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

// SISTEMA DE PESTAÑAS
window.cambiarPestana = function(pestana) {
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

// CONEXIÓN A SUPABASE
const SUPABASE_URL = 'https://xfumgbxmjzognpscwxp.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhmdW1nYnhtanpvZ25wc2N3eGdwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTMxMjI1OTUsImV4cCI6MjEwODY5ODU5NX0.fyJOToOCLnfykOWtsqyQT0yNVjb2sctx4rlZnCA9i_w';

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
    if (!window.supabase) throw new Error("Falta conexión a internet o librería.");
    const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
    const { error } = await supabaseClient.from('usuarios').insert([nuevoUsuario]);
    if (error) throw error;

    const msj = document.getElementById('mensaje-registro');
    msj.textContent = "¡Registro exitoso! Ya formas parte de la red.";
    msj.style.color = "var(--verde-medio)";
    msj.style.display = 'block';
    this.reset();
  } catch (error) {
    const msj = document.getElementById('mensaje-registro');
    msj.textContent = "Error: " + error.message;
    msj.style.color = "red";
    msj.style.display = 'block';
  } finally {
    btnSubmit.disabled = false;
    btnSubmit.textContent = '✅ Registrarme';
    setTimeout(() => { document.getElementById('mensaje-registro').style.display = 'none'; }, 5000);
  }
});

// TASA BCV
async function obtenerTasaBCV() {
  if (btnTasa) { btnTasa.disabled = true; btnTasa.textContent = '⏳ Consultando...'; }
  try {
    const resp = await fetch('/api/tasa-bcv');
    const data = await resp.json();
    if (data.ok && data.tasa) {
      inputTasa.value = data.tasa.toFixed(2);
      if (btnTasa) {
        btnTasa.textContent = '✅ Actualizada';
        setTimeout(() => { btnTasa.textContent = '🔄 Actualizar tasa'; btnTasa.disabled = false; }, 2000);
      }
    }
  } catch (error) {
    if (btnTasa) {
      btnTasa.textContent = '⚠️ Manual';
      setTimeout(() => { btnTasa.textContent = '🔄 Actualizar tasa'; btnTasa.disabled = false; }, 2000);
    }
  }
}

// CARGAR SELECTORES
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
  selectorCategoria.innerHTML = '<option value="">Todas</option>';
  DATOS_AGRO.categorias.forEach(cat => {
    const opt = document.createElement('option');
    opt.value = cat; opt.textContent = cat;
    selectorCategoria.appendChild(opt);
  });
}

function cargarRubros() {
  const cat = selectorCategoria.value;
  const txt = normalizarTexto(inputBuscar.value);
  const fav = checkFavoritos.checked;

  let filtrados = DATOS_AGRO.rubros;
  if (fav) filtrados = filtrados.filter(r => favoritos.includes(r.id));
  if (cat) filtrados = filtrados.filter(r => r.categoria === cat);
  if (txt) filtrados = filtrados.filter(r => normalizarTexto(r.nombre).includes(txt));

  selectorRubro.innerHTML = '<option value="">-- Selecciona --</option>';
  filtrados.forEach(r => {
    const opt = document.createElement('option');
    opt.value = r.id;
    opt.textContent = (favoritos.includes(r.id) ? '⭐ ' : '') + r.nombre;
    selectorRubro.appendChild(opt);
  });
  return filtrados;
}

// PRECIOS Y TARJETA
function calcularPrecio(rubro, mercado, calidad) {
  let base = 0;
  if (mercado === 'todos') {
    const val = Object.values(rubro.precios).filter(v => v > 0);
    if (val.length === 0) return 0;
    base = val.reduce((a, b) => a + b, 0) / val.length;
  } else {
    const clave = MAPA_MERCADOS[mercado];
    if (!clave) return 0;
    base = rubro.precios[clave] || 0;
  }
  if (calidad === 'segunda') return +(base * 0.80).toFixed(2);
  if (calidad === 'golilla') return +(base * 0.50).toFixed(2);
  return +base.toFixed(2);
}

function mostrarEstimado(id) {
  if (!id) {
    resultado.innerHTML = '<p class="mensaje-inicial">Selecciona un rubro.</p>';
    return;
  }
  const tasa = parseFloat(inputTasa.value) || DATOS_AGRO.tasa_bcv;
  const mercado = selectorMercado.value;
  const calidad = selectorCalidad.value;
  const rubro = DATOS_AGRO.rubros.find(r => r.id === id);
  if (!rubro) return;

  const pUSD = calcularPrecio(rubro, mercado, calidad);
  const pBs = +(pUSD * tasa).toFixed(2);
  const etMercado = mercado === 'todos' ? 'Promedio nacional' : mercado;
  let etCalidad = calidad === 'segunda' ? "Segunda" : calidad === 'golilla' ? "Golilla" : "Primera";

  const claseEstrella = favoritos.includes(rubro.id) ? 'activo' : '';
  const claseDestacado = mercado === '🌾 Puerta de Finca' ? 'destacado-finca' : '';

  const mercadosHTML = DATOS_AGRO.mercados.map(m => {
    const c = MAPA_MERCADOS[m.nombre];
    let p = rubro.precios[c] || 0;
    if (calidad === 'segunda') p *= 0.8;
    if (calidad === 'golilla') p *= 0.5;
    const sel = (mercado === m.nombre) ? ' seleccionado' : '';
    return `<li class="${sel}"><span class="nombre-mercado">${m.nombre}</span><span class="precio-mercado">${p > 0 ? '$'+p.toFixed(2) : '—'}</span></li>`;
  }).join('');

  resultado.innerHTML = `
    <div class="tarjeta-rubro">
      <button class="btn-estrella ${claseEstrella}" data-id="${rubro.id}">★</button>
      <p class="categoria-etiqueta">${rubro.categoria}</p>
      <h2>${rubro.nombre} <span style="font-size:0.7em; color:var(--texto-suave);">(${etCalidad})</span></h2>
      <p class="unidad">Unidad: ${rubro.unidad}</p>
      <p class="mercado-referencia">📍 ${etMercado}</p>
      <div class="precio-principal ${claseDestacado}">
        <span class="usd">$${pUSD.toFixed(2)}</span>
        <span class="bs">Bs ${pBs.toFixed(2)}</span>
      </div>
      <h3 class="titulo-mercados">Mercados</h3>
      <ul class="mercados">${mercadosHTML}</ul>
      <p class="fecha-actualizacion">Tasa: ${tasa} Bs/USD</p>
      <a href="https://wa.me/?text=Precio de ${rubro.nombre}: $${pUSD.toFixed(2)}" target="_blank" class="btn-wsp">📲 Compartir</a>
    </div>
  `;
  document.querySelector('.btn-estrella').addEventListener('click', (e) => {
    if (favoritos.includes(rubro.id)) favoritos = favoritos.filter(f => f !== rubro.id);
    else favoritos.push(rubro.id);
    localStorage.setItem('agroprecios_favoritos', JSON.stringify(favoritos));
    mostrarEstimado(rubro.id);
    cargarRubros();
  });
}

// EVENTOS E INICIO
selectorMercado.addEventListener('change', () => mostrarEstimado(selectorRubro.value));
selectorCalidad.addEventListener('change', () => mostrarEstimado(selectorRubro.value));
selectorCategoria.addEventListener('change', () => { cargarRubros(); selectorRubro.value = ''; });
inputBuscar.addEventListener('input', () => {
  const f = cargarRubros();
  if (f.length > 0 && inputBuscar.value.length > 2) {
    selectorRubro.value = f[0].id;
    mostrarEstimado(f[0].id);
  }
});
checkFavoritos.addEventListener('change', () => { cargarRubros(); selectorRubro.value = ''; });
selectorRubro.addEventListener('change', (e) => { mostrarEstimado(e.target.value); inputBuscar.value = ''; });
btnActualizar.addEventListener('click', () => mostrarEstimado(selectorRubro.value));
if (btnTasa) btnTasa.addEventListener('click', obtenerTasaBCV);

cargarMercados();
cargarCategorias();
cargarRubros();
inputTasa.value = DATOS_AGRO.tasa_bcv;
obtenerTasaBCV();

// ESTADÍSTICAS
let visitas = parseInt(localStorage.getItem('agroprecios_visitas')) || 0;
visitas++;
localStorage.setItem('agroprecios_visitas', visitas);
if (document.getElementById('visit-counter')) document.getElementById('visit-counter').textContent = `👁️ Visitas: ${visitas}`;
if (document.getElementById('current-datetime')) {
  const now = new Date();
  document.getElementById('current-datetime').textContent = `📅 ${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()}`;
}