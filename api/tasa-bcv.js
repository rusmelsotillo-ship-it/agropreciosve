export default async function handler(req, res) {
  try {
    const resp = await fetch('https://ve.dolarapi.com/v1/dolares/oficial');
    const data = await resp.json();

    if (data && data.promedio) {
      return res.status(200).json({
        ok: true,
        tasa: data.promedio,
        fecha: data.fechaActualizacion || new Date().toISOString(),
        fuente: 'DolarAPI (Oficial)'
      });
    }
    throw new Error('La API no devolvió el promedio esperado');
  } catch (error) {
    console.error('❌ Error obteniendo tasa BCV:', error.message);
    res.status(500).json({ ok: false, error: 'No se pudo conectar con el servidor de la tasa.' });
  }
}