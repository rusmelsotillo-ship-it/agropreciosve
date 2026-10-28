async function obtenerTasaBCV() {
  if (btnTasa) { btnTasa.disabled = true; btnTasa.textContent = '⏳ Consultando...'; }
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 8000);

  try {
    // Agregamos "?t=..." para forzar a Chrome a pedir un dato nuevo y no usar el caché
    const resp = await fetch('/api/tasa-bcv?t=' + new Date().getTime(), { signal: controller.signal });
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