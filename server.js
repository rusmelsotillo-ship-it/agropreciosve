const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// ------------------------------------------------------------
// Endpoint para obtener la tasa BCV oficial
// ------------------------------------------------------------
app.get('/api/tasa-bcv', async (req, res) => {
  try {
    // Consultamos la API pública que refleja la tasa oficial del BCV
    const resp = await fetch('https://ve.dolarapi.com/v1/dolares/oficial');
    const data = await resp.json();

    if (data && data.promedio) {
      console.log('✅ Tasa obtenida:', data.promedio);
      return res.json({
        ok: true,
        tasa: data.promedio,
        fecha: data.fechaActualizacion || new Date().toISOString(),
        fuente: 'DolarAPI (Oficial)'
      });
    }
    
    throw new Error('La API no devolvió el promedio esperado');
  } catch (error) {
    console.error('❌ Error obteniendo tasa BCV:', error.message);
    // Si falla, enviamos un error para que el frontend use la tasa manual
    res.status(500).json({ ok: false, error: 'No se pudo conectar con el servidor de la tasa.' });
  }
});

// ------------------------------------------------------------
// Iniciar servidor
// ------------------------------------------------------------
app.listen(PORT, () => {
  console.log('==============================================');
  console.log('  AgroPreciosVE corriendo en:');
  console.log('  http://localhost:' + PORT);
  console.log('==============================================');
});