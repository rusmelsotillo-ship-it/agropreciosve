// ============================================================
// AgroPreciosVE - Base de datos AGROPECUARIA COMPLETA
// 8 mercados: Finca, Coche, Mercamara, Mercabar, Tocuyito,
//             Valera, San Cristóbal, Mérida
// Precios en USD - Octubre 2026
// ============================================================

const MERCADOS = [
  { id: "finca", nombre: "🌾 Puerta de Finca", estado: "Nacional" },
  { id: "coche", nombre: "Coche (Caracas)", estado: "Distrito Capital" },
  { id: "mercamara", nombre: "Mercamara (Maracaibo)", estado: "Zulia" },
  { id: "mercabar", nombre: "Mercabar (Barquisimeto)", estado: "Lara" },
  { id: "tocuyito", nombre: "Tocuyito (Carabobo)", estado: "Carabobo" },
  { id: "valera", nombre: "Makroval (Valera)", estado: "Trujillo" },
  { id: "san_cristobal", nombre: "San Cristóbal (Táchira)", estado: "Táchira" },
  { id: "merida", nombre: "Mérida", estado: "Mérida" }
];

const CATEGORIAS = [
  "Hortalizas",
  "Frutas",
  "Tubérculos y raíces",
  "Cereales y leguminosas",
  "Oleaginosas",
  "Pecuarios",
  "Pescados y mariscos",
  "Agroindustriales",
  "Otros"
];

const DATOS_AGRO = {
  tasa_bcv: 877.90,
  nota: "Precios DEMOSTRATIVOS. No son oficiales. Actualizar manualmente.",
  categorias: CATEGORIAS,
  mercados: MERCADOS,
  rubros: [

    // ==================== HORTALIZAS (1-50) ====================
    {
      id: "papa-unica", nombre: "Papa Única", categoria: "Hortalizas",
      unidad: "saco 50 kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 25.00, coche: 60.50, mercamara: 51.50, mercabar: 45.00, tocuyito: 54.00, valera: 35.00, san_cristobal: 35.00, merida: 32.50 }
    },
    {
      id: "papa-amarilla", nombre: "Papa Amarilla", categoria: "Hortalizas",
      unidad: "saco 45 kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 13.50, coche: 32.50, mercamara: 30.00, mercabar: 24.00, tocuyito: 28.50, valera: 20.00, san_cristobal: 18.00, merida: 18.00 }
    },
    {
      id: "papa-maria-bonita", nombre: "Papa María Bonita", categoria: "Hortalizas",
      unidad: "saco 50 kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 20.00, coche: 48.50, mercamara: 43.00, mercabar: 39.00, tocuyito: 45.00, valera: 29.00, san_cristobal: 27.00, merida: 27.00 }
    },
    {
      id: "zanahoria-lavada", nombre: "Zanahoria Lavada", categoria: "Hortalizas",
      unidad: "saco 45 kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 5.50, coche: 18.50, mercamara: 16.50, mercabar: 12.00, tocuyito: 15.50, valera: 9.50, san_cristobal: 8.50, merida: 8.50 }
    },
    {
      id: "zanahoria-campo", nombre: "Zanahoria de Campo", categoria: "Hortalizas",
      unidad: "saco 45 kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 2.50, coche: 9.50, mercamara: 8.50, mercabar: 6.50, tocuyito: 8.00, valera: 5.00, san_cristobal: 4.50, merida: 4.00 }
    },
    {
      id: "cebolla-meridena", nombre: "Cebolla Merideña", categoria: "Hortalizas",
      unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 0.70, coche: 2.00, mercamara: 1.75, mercabar: 1.45, tocuyito: 1.65, valera: 1.10, san_cristobal: 0.95, merida: 0.95 }
    },
    {
      id: "cebolla-quibor", nombre: "Cebolla de Quíbor", categoria: "Hortalizas",
      unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 0.60, coche: 1.90, mercamara: 1.60, mercabar: 1.05, tocuyito: 1.45, valera: 1.30, san_cristobal: 1.20, merida: 1.20 }
    },
    {
      id: "cebolla-morada", nombre: "Cebolla Morada", categoria: "Hortalizas",
      unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 1.00, coche: 2.60, mercamara: 2.35, mercabar: 2.00, tocuyito: 2.20, valera: 1.65, san_cristobal: 1.55, merida: 1.55 }
    },
    {
      id: "tomate-lujo", nombre: "Tomate de Lujo", categoria: "Hortalizas",
      unidad: "cesta 22 kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 13.50, coche: 37.50, mercamara: 33.00, mercabar: 27.00, tocuyito: 31.00, valera: 22.50, san_cristobal: 21.00, merida: 21.00 }
    },
    {
      id: "tomate-comercial", nombre: "Tomate Comercial", categoria: "Hortalizas",
      unidad: "cesta 22 kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 9.00, coche: 24.00, mercamara: 20.50, mercabar: 16.00, tocuyito: 19.50, valera: 14.00, san_cristobal: 13.00, merida: 13.00 }
    },
    {
      id: "tomate-golilla", nombre: "Tomate Golilla", categoria: "Hortalizas",
      unidad: "cesta 22 kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 5.00, coche: 15.00, mercamara: 13.50, mercabar: 10.50, tocuyito: 12.50, valera: 9.00, san_cristobal: 8.00, merida: 8.00 }
    },
    {
      id: "pimenton-grande", nombre: "Pimentón Grande", categoria: "Hortalizas",
      unidad: "cesta 12 kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 4.00, coche: 12.00, mercamara: 10.50, mercabar: 7.50, tocuyito: 9.50, valera: 6.50, san_cristobal: 5.50, merida: 5.50 }
    },
    {
      id: "pimenton-verde", nombre: "Pimentón Verde", categoria: "Hortalizas",
      unidad: "cesta 12 kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 2.00, coche: 7.00, mercamara: 6.00, mercabar: 4.25, tocuyito: 5.50, valera: 3.75, san_cristobal: 3.25, merida: 3.25 }
    },
    {
      id: "aji-margaritena", nombre: "Ají Margariteña", categoria: "Hortalizas",
      unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 1.55, coche: 3.00, mercamara: 2.60, mercabar: 2.20, tocuyito: 2.45, valera: 2.10, san_cristobal: 2.00, merida: 2.00 }
    },
    {
      id: "aji-ne", nombre: "Ají Auténtico N.E.", categoria: "Hortalizas",
      unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 3.00, coche: 5.00, mercamara: 5.30, mercabar: 4.60, tocuyito: 4.80, valera: 5.50, san_cristobal: 5.30, merida: 5.30 }
    },
    {
      id: "aji-dulce-llanero", nombre: "Ají Dulce Llanero", categoria: "Hortalizas",
      unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 0.70, coche: 1.60, mercamara: 1.35, mercabar: 1.10, tocuyito: 1.30, valera: 1.15, san_cristobal: 1.05, merida: 1.05 }
    },
    {
      id: "aji-pepon", nombre: "Ají Pepón", categoria: "Hortalizas",
      unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 0.60, coche: 1.40, mercamara: 1.15, mercabar: 0.95, tocuyito: 1.15, valera: 1.00, san_cristobal: 0.95, merida: 0.95 }
    },
    {
      id: "aji-chirel", nombre: "Ají Chirel / Picante", categoria: "Hortalizas",
      unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 1.35, coche: 3.15, mercamara: 2.80, mercabar: 2.30, tocuyito: 2.60, valera: 2.05, san_cristobal: 1.95, merida: 1.95 }
    },
    {
      id: "pepino-estandar", nombre: "Pepino Estándar", categoria: "Hortalizas",
      unidad: "cesta 24 kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 3.25, coche: 11.50, mercamara: 10.50, mercabar: 7.50, tocuyito: 9.50, valera: 6.00, san_cristobal: 5.50, merida: 5.50 }
    },
    {
      id: "calabacin", nombre: "Calabacín Criollo", categoria: "Hortalizas",
      unidad: "cesta 20 kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 4.00, coche: 14.00, mercamara: 12.00, mercabar: 8.50, tocuyito: 11.00, valera: 7.25, san_cristobal: 6.50, merida: 6.50 }
    },
    {
      id: "berenjena", nombre: "Berenjena Morada", categoria: "Hortalizas",
      unidad: "cesta 18 kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 2.75, coche: 9.50, mercamara: 8.25, mercabar: 6.25, tocuyito: 7.50, valera: 5.25, san_cristobal: 4.75, merida: 4.75 }
    },
    {
      id: "chayota", nombre: "Chayota Sin Espinas", categoria: "Hortalizas",
      unidad: "cesta 24 kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 1.50, coche: 6.50, mercamara: 7.50, mercabar: 4.50, tocuyito: 5.50, valera: 3.25, san_cristobal: 2.75, merida: 2.75 }
    },
    {
      id: "yuca-dulce", nombre: "Yuca Dulce Lavada", categoria: "Hortalizas",
      unidad: "saco 45 kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 7.00, coche: 20.00, mercamara: 16.00, mercabar: 13.00, tocuyito: 17.00, valera: 14.00, san_cristobal: 13.00, merida: 13.00 }
    },
    {
      id: "ajo-blanco", nombre: "Ajo Blanco Criollo", categoria: "Hortalizas",
      unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 1.75, coche: 4.50, mercamara: 4.70, mercabar: 3.60, tocuyito: 4.10, valera: 2.85, san_cristobal: 2.60, merida: 2.60 }
    },
    {
      id: "ajo-morado", nombre: "Ajo Morado", categoria: "Hortalizas",
      unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 2.40, coche: 6.00, mercamara: 6.30, mercabar: 5.20, tocuyito: 5.60, valera: 4.20, san_cristobal: 3.95, merida: 3.95 }
    },
    {
      id: "cebollin", nombre: "Cebollín", categoria: "Hortalizas",
      unidad: "atado 5 kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 2.00, coche: 7.50, mercamara: 8.25, mercabar: 5.50, tocuyito: 6.50, valera: 4.25, san_cristobal: 3.75, merida: 3.75 }
    },
    {
      id: "cilantro", nombre: "Cilantro de España", categoria: "Hortalizas",
      unidad: "huacal 4 kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 4.00, coche: 14.00, mercamara: 16.25, mercabar: 10.00, tocuyito: 12.00, valera: 7.50, san_cristobal: 6.50, merida: 6.50 }
    },
    {
      id: "perejil-liso", nombre: "Perejil Liso", categoria: "Hortalizas",
      unidad: "huacal 4 kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 2.75, coche: 10.50, mercamara: 11.75, mercabar: 7.25, tocuyito: 8.75, valera: 5.50, san_cristobal: 5.00, merida: 5.00 }
    },
    {
      id: "perejil-crespo", nombre: "Perejil Crespo", categoria: "Hortalizas",
      unidad: "huacal 4 kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 3.25, coche: 12.50, mercamara: 13.50, mercabar: 8.75, tocuyito: 10.50, valera: 6.50, san_cristobal: 6.00, merida: 6.00 }
    },
    {
      id: "apio-espana", nombre: "Apio España", categoria: "Hortalizas",
      unidad: "atado grueso", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 1.40, coche: 5.25, mercamara: 5.75, mercabar: 3.75, tocuyito: 4.50, valera: 2.60, san_cristobal: 2.40, merida: 2.40 }
    },
    {
      id: "repollo-blanco", nombre: "Repollo Blanco", categoria: "Hortalizas",
      unidad: "saco 40 kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 2.75, coche: 10.00, mercamara: 11.00, mercabar: 7.50, tocuyito: 8.75, valera: 5.50, san_cristobal: 5.00, merida: 5.00 }
    },
    {
      id: "repollo-morado", nombre: "Repollo Morado", categoria: "Hortalizas",
      unidad: "cesta 30 kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 5.00, coche: 17.00, mercamara: 18.00, mercabar: 12.75, tocuyito: 14.75, valera: 9.50, san_cristobal: 8.50, merida: 8.50 }
    },
    {
      id: "lechuga-criolla", nombre: "Lechuga Criolla", categoria: "Hortalizas",
      unidad: "cesta 12 un", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 2.00, coche: 6.50, mercamara: 7.50, mercabar: 4.50, tocuyito: 5.50, valera: 3.75, san_cristobal: 3.25, merida: 3.25 }
    },
    {
      id: "lechuga-americana", nombre: "Lechuga Americana", categoria: "Hortalizas",
      unidad: "cesta 12 un", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 2.75, coche: 8.50, mercamara: 9.75, mercabar: 6.25, tocuyito: 7.25, valera: 5.00, san_cristobal: 4.50, merida: 4.50 }
    },
    {
      id: "lechuga-romana", nombre: "Lechuga Romana", categoria: "Hortalizas",
      unidad: "cesta 12 un", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 3.25, coche: 10.25, mercamara: 11.50, mercabar: 7.50, tocuyito: 9.00, valera: 6.25, san_cristobal: 5.75, merida: 5.75 }
    },
    {
      id: "coliflor", nombre: "Coliflor Grande", categoria: "Hortalizas",
      unidad: "cesta 10 un", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 5.00, coche: 19.00, mercamara: 21.00, mercabar: 13.00, tocuyito: 16.00, valera: 10.00, san_cristobal: 9.25, merida: 9.25 }
    },
    {
      id: "brocoli", nombre: "Brócoli", categoria: "Hortalizas",
      unidad: "cesta 12 un", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 6.00, coche: 21.00, mercamara: 23.00, mercabar: 15.50, tocuyito: 17.75, valera: 12.00, san_cristobal: 11.00, merida: 11.00 }
    },
    {
      id: "auyama", nombre: "Auyama Llanera", categoria: "Hortalizas",
      unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 0.13, coche: 0.50, mercamara: 0.40, mercabar: 0.30, tocuyito: 0.40, valera: 0.30, san_cristobal: 0.30, merida: 0.30 }
    },
    {
      id: "ocumo-chino", nombre: "Ocumo Chino", categoria: "Hortalizas",
      unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 0.40, coche: 1.25, mercamara: 1.35, mercabar: 0.95, tocuyito: 1.05, valera: 0.85, san_cristobal: 0.85, merida: 0.85 }
    },
    {
      id: "ocumo-blanco", nombre: "Ocumo Blanco", categoria: "Hortalizas",
      unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 0.58, coche: 1.80, mercamara: 1.90, mercabar: 1.35, tocuyito: 1.55, valera: 1.25, san_cristobal: 1.15, merida: 1.15 }
    },
    {
      id: "name-espino", nombre: "Ñame Espino", categoria: "Hortalizas",
      unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 0.45, coche: 1.45, mercamara: 1.55, mercabar: 1.05, tocuyito: 1.25, valera: 1.05, san_cristobal: 1.05, merida: 1.05 }
    },
    {
      id: "name-diamante", nombre: "Ñame Diamante", categoria: "Hortalizas",
      unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 0.35, coche: 1.10, mercamara: 1.25, mercabar: 0.80, tocuyito: 0.95, valera: 0.85, san_cristobal: 0.85, merida: 0.85 }
    },
    {
      id: "apio-carabobo", nombre: "Apio Carabobo", categoria: "Hortalizas",
      unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 0.53, coche: 1.70, mercamara: 1.80, mercabar: 1.25, tocuyito: 1.45, valera: 1.05, san_cristobal: 0.95, merida: 0.95 }
    },
    {
      id: "batata-rosada", nombre: "Batata Rosada", categoria: "Hortalizas",
      unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 0.30, coche: 1.05, mercamara: 0.95, mercabar: 0.70, tocuyito: 0.85, valera: 0.75, san_cristobal: 0.75, merida: 0.75 }
    },
    {
      id: "jengibre", nombre: "Jengibre Fresco", categoria: "Hortalizas",
      unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 1.40, coche: 4.15, mercamara: 4.40, mercabar: 3.30, tocuyito: 3.70, valera: 2.80, san_cristobal: 2.60, merida: 2.60 }
    },
    {
      id: "curcuma", nombre: "Cúrcuma Raíz", categoria: "Hortalizas",
      unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 1.75, coche: 4.75, mercamara: 5.25, mercabar: 3.85, tocuyito: 4.20, valera: 3.30, san_cristobal: 3.10, merida: 3.10 }
    },
    {
      id: "mapuey", nombre: "Mapuey Morado", categoria: "Hortalizas",
      unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 0.48, coche: 1.60, mercamara: 1.70, mercabar: 1.15, tocuyito: 1.35, valera: 1.05, san_cristobal: 1.05, merida: 1.05 }
    },
    {
      id: "jojoto", nombre: "Jojoto / Maíz Tierno", categoria: "Hortalizas",
      unidad: "saco 100 un", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 5.00, coche: 19.00, mercamara: 16.75, mercabar: 12.25, tocuyito: 15.25, valera: 11.00, san_cristobal: 10.00, merida: 10.00 }
    },
    {
      id: "remolacha", nombre: "Remolacha Lavada", categoria: "Hortalizas",
      unidad: "saco 40 kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 4.00, coche: 14.00, mercamara: 15.25, mercabar: 10.00, tocuyito: 12.00, valera: 8.00, san_cristobal: 7.50, merida: 7.50 }
    },
    {
      id: "vainitas", nombre: "Vainitas Planas", categoria: "Hortalizas",
      unidad: "saco 30 kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 5.00, coche: 17.50, mercamara: 19.25, mercabar: 12.25, tocuyito: 14.75, valera: 9.75, san_cristobal: 8.75, merida: 8.75 }
    },
    {
      id: "rabano", nombre: "Rábano", categoria: "Hortalizas",
      unidad: "docena amarres", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 1.25, coche: 5.00, mercamara: 5.50, mercabar: 3.25, tocuyito: 4.00, valera: 2.60, san_cristobal: 2.40, merida: 2.40 }
    },
    {
      id: "ajo-porro-grande", nombre: "Ajo Porro Grande", categoria: "Hortalizas",
      unidad: "atado 10 un", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 2.50, coche: 8.50, mercamara: 9.50, mercabar: 6.25, tocuyito: 7.25, valera: 5.00, san_cristobal: 4.50, merida: 4.50 }
    },
    {
      id: "nabo", nombre: "Nabo", categoria: "Hortalizas",
      unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 0.25, coche: 0.95, mercamara: 1.05, mercabar: 0.65, tocuyito: 0.75, valera: 0.50, san_cristobal: 0.50, merida: 0.50 }
    },
    {
      id: "espinaca", nombre: "Espinaca", categoria: "Hortalizas",
      unidad: "cesta 3 kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 0.65, coche: 3.25, mercamara: 3.75, mercabar: 2.30, tocuyito: 2.75, valera: 1.60, san_cristobal: 1.40, merida: 1.40 }
    },
    {
      id: "acelga", nombre: "Acelga", categoria: "Hortalizas",
      unidad: "bulto 4 kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 0.55, coche: 2.75, mercamara: 3.10, mercabar: 1.95, tocuyito: 2.35, valera: 1.35, san_cristobal: 1.20, merida: 1.20 }
    },
// ==================== FRUTAS (51-85) ====================
{
  id: "platano-harton", nombre: "Plátano Hartón", categoria: "Frutas",
  unidad: "cesta 23 kg", ajuste_temporada: 0, fecha: "2026-10-15",
  precios: { finca: 4.25, coche: 14.00, mercamara: 9.50, mercabar: 11.00, tocuyito: 12.50, valera: 7.50, san_cristobal: 6.50, merida: 6.50 }
},
{
  id: "platano-maduro", nombre: "Plátano Maduro", categoria: "Frutas",
  unidad: "cesta 23 kg", ajuste_temporada: 0, fecha: "2026-10-15",
  precios: { finca: 5.00, coche: 16.00, mercamara: 10.50, mercabar: 12.50, tocuyito: 14.00, valera: 8.50, san_cristobal: 7.50, merida: 7.50 }
},
{
  id: "cambur-criollo", nombre: "Cambur Criollo", categoria: "Frutas",
  unidad: "cesta 22 kg", ajuste_temporada: 0, fecha: "2026-10-15",
  precios: { finca: 2.75, coche: 8.50, mercamara: 7.25, mercabar: 6.25, tocuyito: 7.75, valera: 5.50, san_cristobal: 5.00, merida: 5.00 }
},
{
  id: "cambur-manzano", nombre: "Cambur Manzano", categoria: "Frutas",
  unidad: "cesta 20 kg", ajuste_temporada: 0, fecha: "2026-10-15",
  precios: { finca: 3.75, coche: 12.00, mercamara: 10.50, mercabar: 9.25, tocuyito: 10.75, valera: 7.75, san_cristobal: 7.00, merida: 7.00 }
},
{
  id: "cambur-titiaro", nombre: "Cambur Titiaro", categoria: "Frutas",
  unidad: "cesta 20 kg", ajuste_temporada: 0, fecha: "2026-10-15",
  precios: { finca: 4.25, coche: 13.50, mercamara: 11.50, mercabar: 10.50, tocuyito: 12.50, valera: 9.50, san_cristobal: 8.50, merida: 8.50 }
},
{
  id: "pina-grande", nombre: "Piña Grande", categoria: "Frutas",
  unidad: "unidad", ajuste_temporada: 0, fecha: "2026-10-15",
  precios: { finca: 0.20, coche: 0.75, mercamara: 0.65, mercabar: 0.50, tocuyito: 0.65, valera: 0.50, san_cristobal: 0.45, merida: 0.45 }
},
{
  id: "pina-mediana", nombre: "Piña Mediana", categoria: "Frutas",
  unidad: "unidad", ajuste_temporada: 0, fecha: "2026-10-15",
  precios: { finca: 0.13, coche: 0.45, mercamara: 0.40, mercabar: 0.32, tocuyito: 0.40, valera: 0.32, san_cristobal: 0.28, merida: 0.28 }
},
{
  id: "patilla", nombre: "Patilla Criolla", categoria: "Frutas",
  unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
  precios: { finca: 0.10, coche: 0.36, mercamara: 0.29, mercabar: 0.25, tocuyito: 0.28, valera: 0.26, san_cristobal: 0.25, merida: 0.25 }
},
{
  id: "lechosa", nombre: "Lechoza Maradol", categoria: "Frutas",
  unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
  precios: { finca: 0.15, coche: 0.52, mercamara: 0.50, mercabar: 0.37, tocuyito: 0.44, valera: 0.36, san_cristobal: 0.34, merida: 0.34 }
},
{
  id: "melon", nombre: "Melón Amarillo", categoria: "Frutas",
  unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
  precios: { finca: 0.30, coche: 0.98, mercamara: 0.85, mercabar: 0.65, tocuyito: 0.88, valera: 0.72, san_cristobal: 0.67, merida: 0.67 }
},
{
  id: "naranja-jugo", nombre: "Naranja Jugo", categoria: "Frutas",
  unidad: "saco 45 kg", ajuste_temporada: 0, fecha: "2026-10-15",
  precios: { finca: 6.00, coche: 24.50, mercamara: 22.50, mercabar: 16.50, tocuyito: 20.50, valera: 18.50, san_cristobal: 17.50, merida: 17.50 }
},
{
  id: "naranja-mesa", nombre: "Naranja Mesa", categoria: "Frutas",
  unidad: "saco 45 kg", ajuste_temporada: 0, fecha: "2026-10-15",
  precios: { finca: 7.00, coche: 27.00, mercamara: 25.00, mercabar: 19.00, tocuyito: 23.00, valera: 21.00, san_cristobal: 20.00, merida: 20.00 }
},
{
  id: "limon-persa", nombre: "Limón Persa", categoria: "Frutas",
  unidad: "cesta 24 kg", ajuste_temporada: 0, fecha: "2026-10-15",
  precios: { finca: 7.50, coche: 25.00, mercamara: 21.00, mercabar: 17.50, tocuyito: 22.00, valera: 19.00, san_cristobal: 18.00, merida: 18.00 }
},
{
  id: "limon-criollo", nombre: "Limón Criollo", categoria: "Frutas",
  unidad: "saco 40 kg", ajuste_temporada: 0, fecha: "2026-10-15",
  precios: { finca: 6.00, coche: 20.50, mercamara: 18.50, mercabar: 14.50, tocuyito: 17.50, valera: 16.50, san_cristobal: 15.50, merida: 15.50 }
},
{
  id: "mandarina", nombre: "Mandarina Criolla", categoria: "Frutas",
  unidad: "saco 40 kg", ajuste_temporada: 0, fecha: "2026-10-15",
  precios: { finca: 5.00, coche: 18.50, mercamara: 17.50, mercabar: 12.00, tocuyito: 15.50, valera: 14.00, san_cristobal: 13.00, merida: 13.00 }
},
{
  id: "aguacate-liso", nombre: "Aguacate Liso", categoria: "Frutas",
  unidad: "cesta 22 kg", ajuste_temporada: 0, fecha: "2026-10-15",
  precios: { finca: 6.00, coche: 21.00, mercamara: 18.50, mercabar: 14.00, tocuyito: 17.50, valera: 16.50, san_cristobal: 15.50, merida: 15.50 }
},
{
  id: "aguacate-choquette", nombre: "Aguacate Choquette", categoria: "Frutas",
  unidad: "cesta 22 kg", ajuste_temporada: 0, fecha: "2026-10-15",
  precios: { finca: 14.00, coche: 50.00, mercamara: 45.00, mercabar: 36.00, tocuyito: 42.00, valera: 39.50, san_cristobal: 37.00, merida: 37.00 }
},
{
  id: "parchita", nombre: "Parchita Maracuyá", categoria: "Frutas",
  unidad: "cesta 20 kg", ajuste_temporada: 0, fecha: "2026-10-15",
  precios: { finca: 6.50, coche: 22.00, mercamara: 19.00, mercabar: 13.50, tocuyito: 17.00, valera: 15.50, san_cristobal: 14.50, merida: 14.50 }
},
{
  id: "guayaba", nombre: "Guayaba Dulce", categoria: "Frutas",
  unidad: "cesta 22 kg", ajuste_temporada: 0, fecha: "2026-10-15",
  precios: { finca: 3.75, coche: 13.50, mercamara: 12.00, mercabar: 8.50, tocuyito: 11.00, valera: 9.50, san_cristobal: 8.75, merida: 8.75 }
},
{
  id: "mango-bocado", nombre: "Mango de Bocado", categoria: "Frutas",
  unidad: "cesta 22 kg", ajuste_temporada: 0, fecha: "2026-10-15",
  precios: { finca: 1.50, coche: 7.50, mercamara: 6.50, mercabar: 4.50, tocuyito: 5.75, valera: 5.00, san_cristobal: 4.50, merida: 4.50 }
},
{
  id: "mango-kent", nombre: "Mango Injerto Kent", categoria: "Frutas",
  unidad: "cesta 20 kg", ajuste_temporada: 0, fecha: "2026-10-15",
  precios: { finca: 4.00, coche: 14.00, mercamara: 12.00, mercabar: 9.25, tocuyito: 11.25, valera: 10.50, san_cristobal: 9.50, merida: 9.50 }
},
{
  id: "guanabana", nombre: "Guanábana Gigante", categoria: "Frutas",
  unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
  precios: { finca: 0.50, coche: 1.85, mercamara: 1.70, mercabar: 1.25, tocuyito: 1.50, valera: 1.35, san_cristobal: 1.25, merida: 1.25 }
},
{
  id: "tamarindo", nombre: "Tamarindo en Vaina", categoria: "Frutas",
  unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
  precios: { finca: 0.38, coche: 1.45, mercamara: 1.30, mercabar: 1.00, tocuyito: 1.20, valera: 1.10, san_cristobal: 1.05, merida: 1.05 }
},
{
  id: "fresa", nombre: "Fresa Camino Real", categoria: "Frutas",
  unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
  precios: { finca: 1.30, coche: 2.85, mercamara: 3.40, mercabar: 2.50, tocuyito: 2.70, valera: 1.90, san_cristobal: 1.70, merida: 1.70 }
},
{
  id: "mora", nombre: "Mora Andina", categoria: "Frutas",
  unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
  precios: { finca: 1.10, coche: 2.60, mercamara: 3.00, mercabar: 2.20, tocuyito: 2.45, valera: 1.65, san_cristobal: 1.45, merida: 1.45 }
},
{
  id: "durazno", nombre: "Durazno Jarillo", categoria: "Frutas",
  unidad: "cesta 18 kg", ajuste_temporada: 0, fecha: "2026-10-15",
  precios: { finca: 12.50, coche: 41.50, mercamara: 45.00, mercabar: 32.00, tocuyito: 37.00, valera: 28.00, san_cristobal: 26.00, merida: 26.00 }
},
{
  id: "coco-seco", nombre: "Coco Seco Pelado", categoria: "Frutas",
  unidad: "saco 50 un", ajuste_temporada: 0, fecha: "2026-10-15",
  precios: { finca: 21.00, coche: 62.50, mercamara: 52.50, mercabar: 47.50, tocuyito: 55.00, valera: 59.00, san_cristobal: 57.00, merida: 57.00 }
},
{
  id: "coco-verde", nombre: "Coco Verde Agua", categoria: "Frutas",
  unidad: "unidad", ajuste_temporada: 0, fecha: "2026-10-15",
  precios: { finca: 0.18, coche: 0.62, mercamara: 0.50, mercabar: 0.42, tocuyito: 0.52, valera: 0.57, san_cristobal: 0.55, merida: 0.55 }
},
{
  id: "nispero", nombre: "Níspero Criollo", categoria: "Frutas",
  unidad: "cesta 15 kg", ajuste_temporada: 0, fecha: "2026-10-15",
  precios: { finca: 5.00, coche: 16.50, mercamara: 15.00, mercabar: 11.00, tocuyito: 13.00, valera: 14.00, san_cristobal: 13.00, merida: 13.00 }
},
{
  id: "zapote", nombre: "Zapote Mamey", categoria: "Frutas",
  unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
  precios: { finca: 0.42, coche: 1.55, mercamara: 1.40, mercabar: 1.10, tocuyito: 1.30, valera: 1.40, san_cristobal: 1.35, merida: 1.35 }
},
{
  id: "ciruela", nombre: "Ciruela del Huesito", categoria: "Frutas",
  unidad: "cesta 16 kg", ajuste_temporada: 0, fecha: "2026-10-15",
  precios: { finca: 4.00, coche: 15.00, mercamara: 13.50, mercabar: 10.00, tocuyito: 12.50, valera: 14.00, san_cristobal: 13.00, merida: 13.00 }
},
{
  id: "mamon", nombre: "Mamón Criollo", categoria: "Frutas",
  unidad: "cesta 20 kg", ajuste_temporada: 0, fecha: "2026-10-15",
  precios: { finca: 2.75, coche: 10.50, mercamara: 9.00, mercabar: 6.50, tocuyito: 8.25, valera: 9.50, san_cristobal: 8.50, merida: 8.50 }
},
{
  id: "granadilla", nombre: "Granadilla", categoria: "Frutas",
  unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
  precios: { finca: 1.50, coche: 4.40, mercamara: 4.85, mercabar: 3.50, tocuyito: 3.95, valera: 2.80, san_cristobal: 2.60, merida: 2.60 }
},
{
  id: "toronja", nombre: "Toronja Amarilla", categoria: "Frutas",
  unidad: "saco 40 kg", ajuste_temporada: 0, fecha: "2026-10-15",
  precios: { finca: 4.00, coche: 16.50, mercamara: 15.50, mercabar: 11.00, tocuyito: 13.00, valera: 13.00, san_cristobal: 12.00, merida: 12.00 }
},
{
  id: "lima-persa", nombre: "Lima Persa", categoria: "Frutas",
  unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
  precios: { finca: 0.50, coche: 1.90, mercamara: 1.70, mercabar: 1.25, tocuyito: 1.50, valera: 1.55, san_cristobal: 1.45, merida: 1.45 }
},

// ============ TUBÉRCULOS Y RAÍCES (86-96) ============
{
  id: "yuca-amarga", nombre: "Yuca Amarga (casabe)", categoria: "Tubérculos y raíces",
  unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
  precios: { finca: 0.13, coche: 0.20, mercamara: 0.20, mercabar: 0.20, tocuyito: 0.20, valera: 0.20, san_cristobal: 0.20, merida: 0.20 }
},
{
  id: "papa-unica-tub", nombre: "Papa Única (tubérculo)", categoria: "Tubérculos y raíces",
  unidad: "saco 50 kg", ajuste_temporada: 0, fecha: "2026-10-15",
  precios: { finca: 25.00, coche: 60.50, mercamara: 51.50, mercabar: 45.00, tocuyito: 54.00, valera: 35.00, san_cristobal: 35.00, merida: 32.50 }
},

// ============ CEREALES Y LEGUMINOSAS (97-121) ============
{
  id: "caraota-negra", nombre: "Caraota Negra", categoria: "Cereales y leguminosas",
  unidad: "saco 50 kg", ajuste_temporada: 0, fecha: "2026-10-15",
  precios: { finca: 38.50, coche: 80.00, mercamara: 75.00, mercabar: 67.00, tocuyito: 73.00, valera: 63.00, san_cristobal: 60.00, merida: 60.00 }
},
{
  id: "caraota-roja", nombre: "Caraota Roja", categoria: "Cereales y leguminosas",
  unidad: "saco 50 kg", ajuste_temporada: 0, fecha: "2026-10-15",
  precios: { finca: 48.50, coche: 97.50, mercamara: 91.50, mercabar: 83.00, tocuyito: 88.00, valera: 79.50, san_cristobal: 77.00, merida: 77.00 }
},
{
  id: "caraota-blanca", nombre: "Caraota Blanca", categoria: "Cereales y leguminosas",
  unidad: "saco 50 kg", ajuste_temporada: 0, fecha: "2026-10-15",
  precios: { finca: 44.00, coche: 91.50, mercamara: 86.00, mercabar: 77.00, tocuyito: 82.00, valera: 73.00, san_cristobal: 70.00, merida: 70.00 }
},
{
  id: "frijol-bayo", nombre: "Frijol Bayo", categoria: "Cereales y leguminosas",
  unidad: "saco 50 kg", ajuste_temporada: 0, fecha: "2026-10-15",
  precios: { finca: 25.00, coche: 56.00, mercamara: 50.00, mercabar: 42.00, tocuyito: 47.00, valera: 40.00, san_cristobal: 38.00, merida: 38.00 }
},
{
  id: "frijol-chino", nombre: "Frijol Chino", categoria: "Cereales y leguminosas",
  unidad: "saco 50 kg", ajuste_temporada: 0, fecha: "2026-10-15",
  precios: { finca: 23.00, coche: 53.00, mercamara: 47.00, mercabar: 38.50, tocuyito: 45.00, valera: 38.00, san_cristobal: 36.00, merida: 36.00 }
},
{
  id: "quinchoncho-seco", nombre: "Quinchoncho Seco", categoria: "Cereales y leguminosas",
  unidad: "saco 45 kg", ajuste_temporada: 0, fecha: "2026-10-15",
  precios: { finca: 21.00, coche: 47.00, mercamara: 43.00, mercabar: 36.00, tocuyito: 40.50, valera: 34.00, san_cristobal: 31.50, merida: 31.50 }
},
{
  id: "quinchoncho-vaina", nombre: "Quinchoncho Vaina", categoria: "Cereales y leguminosas",
  unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
  precios: { finca: 0.38, coche: 1.45, mercamara: 1.30, mercabar: 1.00, tocuyito: 1.20, valera: 0.95, san_cristobal: 0.85, merida: 0.85 }
},
{
  id: "arveja-verde", nombre: "Arveja Verde Seca", categoria: "Cereales y leguminosas",
  unidad: "saco 50 kg", ajuste_temporada: 0, fecha: "2026-10-15",
  precios: { finca: 28.50, coche: 66.00, mercamara: 60.50, mercabar: 53.00, tocuyito: 58.00, valera: 51.00, san_cristobal: 49.00, merida: 49.00 }
},
{
  id: "arveja-amarilla", nombre: "Arveja Amarilla", categoria: "Cereales y leguminosas",
  unidad: "saco 50 kg", ajuste_temporada: 0, fecha: "2026-10-15",
  precios: { finca: 27.00, coche: 63.00, mercamara: 57.00, mercabar: 50.00, tocuyito: 55.00, valera: 48.00, san_cristobal: 46.00, merida: 46.00 }
},
{
  id: "lenteja", nombre: "Lenteja Comercial", categoria: "Cereales y leguminosas",
  unidad: "saco 50 kg", ajuste_temporada: 0, fecha: "2026-10-15",
  precios: { finca: 31.50, coche: 73.00, mercamara: 67.00, mercabar: 60.00, tocuyito: 65.00, valera: 59.00, san_cristobal: 57.00, merida: 57.00 }
},
{
  id: "garbanzo", nombre: "Garbanzo Nacional", categoria: "Cereales y leguminosas",
  unidad: "saco 45 kg", ajuste_temporada: 0, fecha: "2026-10-15",
  precios: { finca: 41.50, coche: 87.50, mercamara: 81.50, mercabar: 71.50, tocuyito: 78.50, valera: 70.00, san_cristobal: 68.00, merida: 68.00 }
},
{
  id: "maiz-blanco", nombre: "Maíz Blanco Trilla", categoria: "Cereales y leguminosas",
  unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
  precios: { finca: 0.21, coche: 0.46, mercamara: 0.39, mercabar: 0.30, tocuyito: 0.38, valera: 0.29, san_cristobal: 0.29, merida: 0.29 }
},
{
  id: "maiz-amarillo", nombre: "Maíz Amarillo Alimento", categoria: "Cereales y leguminosas",
  unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
  precios: { finca: 0.18, coche: 0.39, mercamara: 0.37, mercabar: 0.28, tocuyito: 0.32, valera: 0.27, san_cristobal: 0.27, merida: 0.27 }
},
{
  id: "maiz-cotufa", nombre: "Maíz Cotufa", categoria: "Cereales y leguminosas",
  unidad: "saco 25 kg", ajuste_temporada: 0, fecha: "2026-10-15",
  precios: { finca: 16.00, coche: 35.00, mercamara: 33.00, mercabar: 27.00, tocuyito: 31.00, valera: 28.00, san_cristobal: 27.00, merida: 27.00 }
},
{
  id: "sorgo", nombre: "Sorgo en Grano", categoria: "Cereales y leguminosas",
  unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
  precios: { finca: 0.16, coche: 0.31, mercamara: 0.29, mercabar: 0.21, tocuyito: 0.28, valera: 0.21, san_cristobal: 0.20, merida: 0.20 }
},
{
  id: "mani", nombre: "Maní con Concha", categoria: "Cereales y leguminosas",
  unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
  precios: { finca: 0.70, coche: 2.20, mercamara: 2.00, mercabar: 1.45, tocuyito: 1.80, valera: 1.70, san_cristobal: 1.60, merida: 1.60 }
},
{
  id: "girasol", nombre: "Semillas Girasol", categoria: "Cereales y leguminosas",
  unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
  precios: { finca: 0.48, coche: 1.55, mercamara: 1.40, mercabar: 1.00, tocuyito: 1.25, valera: 1.20, san_cristobal: 1.10, merida: 1.10 }
},
{
  id: "ajonjoli-blanco", nombre: "Ajonjolí Blanco", categoria: "Cereales y leguminosas",
  unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
  precios: { finca: 0.95, coche: 2.80, mercamara: 2.55, mercabar: 1.90, tocuyito: 2.25, valera: 2.10, san_cristobal: 2.00, merida: 2.00 }
},
{
  id: "ajonjoli-negro", nombre: "Ajonjolí Negro", categoria: "Cereales y leguminosas",
  unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
  precios: { finca: 1.10, coche: 3.30, mercamara: 2.95, mercabar: 2.25, tocuyito: 2.65, valera: 2.50, san_cristobal: 2.35, merida: 2.35 }
},
{
  id: "soya", nombre: "Soya en Grano", categoria: "Cereales y leguminosas",
  unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
  precios: { finca: 0.30, coche: 0.72, mercamara: 0.65, mercabar: 0.48, tocuyito: 0.55, valera: 0.45, san_cristobal: 0.45, merida: 0.45 }
},
{
  id: "cafe-verde", nombre: "Café Verde", categoria: "Cereales y leguminosas",
  unidad: "quintal 46 kg", ajuste_temporada: 0, fecha: "2026-10-15",
  precios: { finca: 120.00, coche: 0, mercamara: 0, mercabar: 0, tocuyito: 0, valera: 0, san_cristobal: 0, merida: 0 }
},
{
  id: "cacao-fermentado", nombre: "Cacao Fermentado", categoria: "Cereales y leguminosas",
  unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
  precios: { finca: 5.00, coche: 8.25, mercamara: 7.85, mercabar: 7.00, tocuyito: 7.60, valera: 7.40, san_cristobal: 7.15, merida: 7.15 }
},
{
  id: "cacao-fino", nombre: "Cacao Fino Aroma", categoria: "Cereales y leguminosas",
  unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
  precios: { finca: 6.25, coche: 10.75, mercamara: 10.00, mercabar: 8.75, tocuyito: 9.50, valera: 9.10, san_cristobal: 8.75, merida: 8.75 }
    },
    // ==================== PECUARIOS (131-155) ====================
    {
      id: "toro-gordo", nombre: "Toro Gordo Pie", categoria: "Pecuarios",
      unidad: "kg en pie", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 1.25, coche: 2.55, mercamara: 2.45, mercabar: 2.25, tocuyito: 2.40, valera: 2.15, san_cristobal: 2.10, merida: 2.10 }
    },
    {
      id: "vaca-pie", nombre: "Vaca Pie", categoria: "Pecuarios",
      unidad: "kg en pie", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 0.95, coche: 2.00, mercamara: 1.90, mercabar: 1.70, tocuyito: 1.80, valera: 1.60, san_cristobal: 1.55, merida: 1.55 }
    },
    {
      id: "cerdo-pie", nombre: "Cerdo en Pie", categoria: "Pecuarios",
      unidad: "kg en pie", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 1.75, coche: 3.30, mercamara: 3.20, mercabar: 2.90, tocuyito: 3.10, valera: 2.80, san_cristobal: 2.75, merida: 2.75 }
    },
    {
      id: "pollo-pie", nombre: "Pollo Engorde Pie", categoria: "Pecuarios",
      unidad: "kg en pie", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 1.20, coche: 2.35, mercamara: 2.25, mercabar: 2.05, tocuyito: 2.15, valera: 1.97, san_cristobal: 1.92, merida: 1.92 }
    },
    {
      id: "gallina-descarte", nombre: "Gallina Descarte Pie", categoria: "Pecuarios",
      unidad: "kg en pie", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 0.80, coche: 1.75, mercamara: 1.65, mercabar: 1.45, tocuyito: 1.55, valera: 1.35, san_cristobal: 1.28, merida: 1.28 }
    },
    {
      id: "huevo-caja", nombre: "Huevo Caja (12 cartones)", categoria: "Pecuarios",
      unidad: "caja 12 cartones", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 25.50, coche: 34.00, mercamara: 33.00, mercabar: 30.00, tocuyito: 32.00, valera: 29.00, san_cristobal: 28.00, merida: 28.00 }
    },
    {
      id: "queso-blanco-duro", nombre: "Queso Blanco Duro", categoria: "Pecuarios",
      unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 2.55, coche: 4.15, mercamara: 3.80, mercabar: 3.30, tocuyito: 3.70, valera: 3.35, san_cristobal: 3.25, merida: 3.25 }
    },
    {
      id: "queso-semiduro", nombre: "Queso Semiduro", categoria: "Pecuarios",
      unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 2.20, coche: 3.65, mercamara: 3.35, mercabar: 2.95, tocuyito: 3.25, valera: 3.05, san_cristobal: 2.95, merida: 2.95 }
    },
    {
      id: "queso-mano", nombre: "Queso de Mano", categoria: "Pecuarios",
      unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 2.45, coche: 4.25, mercamara: 4.05, mercabar: 3.50, tocuyito: 3.85, valera: 3.60, san_cristobal: 3.50, merida: 3.50 }
    },
    {
      id: "queso-telita", nombre: "Queso Telita", categoria: "Pecuarios",
      unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 2.35, coche: 4.15, mercamara: 3.95, mercabar: 3.40, tocuyito: 3.75, valera: 3.50, san_cristobal: 3.40, merida: 3.40 }
    },
    {
      id: "queso-mozzarella", nombre: "Queso Mozzarella Nacional", categoria: "Pecuarios",
      unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 3.10, coche: 5.15, mercamara: 4.85, mercabar: 4.25, tocuyito: 4.55, valera: 4.30, san_cristobal: 4.20, merida: 4.20 }
    },
    {
      id: "queso-ano", nombre: "Queso de Año Guayanés", categoria: "Pecuarios",
      unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 2.80, coche: 4.55, mercamara: 4.30, mercabar: 3.70, tocuyito: 4.10, valera: 3.90, san_cristobal: 3.80, merida: 3.80 }
    },
    {
      id: "suero", nombre: "Suero Criollo", categoria: "Pecuarios",
      unidad: "bidón 20 L", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 5.00, coche: 16.00, mercamara: 14.00, mercabar: 11.00, tocuyito: 13.00, valera: 10.00, san_cristobal: 9.25, merida: 9.25 }
    },
    {
      id: "mantequilla", nombre: "Mantequilla Costal", categoria: "Pecuarios",
      unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 1.50, coche: 4.00, mercamara: 3.65, mercabar: 2.95, tocuyito: 3.35, valera: 3.05, san_cristobal: 2.95, merida: 2.95 }
    },
    {
      id: "leche-cruda", nombre: "Leche Cruda Corral", categoria: "Pecuarios",
      unidad: "litro", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 0.40, coche: 0, mercamara: 0, mercabar: 0, tocuyito: 0, valera: 0, san_cristobal: 0, merida: 0 }
    },
    {
      id: "natilla", nombre: "Natilla Criolla", categoria: "Pecuarios",
      unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 1.20, coche: 3.15, mercamara: 2.90, mercabar: 2.30, tocuyito: 2.60, valera: 2.40, san_cristobal: 2.30, merida: 2.30 }
    },
    {
      id: "chivo-pie", nombre: "Chivo en Pie", categoria: "Pecuarios",
      unidad: "kg en pie", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 1.35, coche: 4.00, mercamara: 3.20, mercabar: 3.40, tocuyito: 3.60, valera: 2.85, san_cristobal: 2.75, merida: 2.75 }
    },
    {
      id: "cordero-pie", nombre: "Cordero en Pie", categoria: "Pecuarios",
      unidad: "kg en pie", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 1.48, coche: 4.30, mercamara: 3.60, mercabar: 3.65, tocuyito: 3.85, valera: 3.10, san_cristobal: 3.00, merida: 3.00 }
    },
    {
      id: "queso-cabra", nombre: "Queso Cabra Artesanal", categoria: "Pecuarios",
      unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 4.00, coche: 8.25, mercamara: 6.50, mercabar: 6.80, tocuyito: 7.20, valera: 5.90, san_cristobal: 5.65, merida: 5.65 }
    },
    {
      id: "leche-cabra", nombre: "Leche de Cabra", categoria: "Pecuarios",
      unidad: "litro", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 0.73, coche: 2.10, mercamara: 1.65, mercabar: 1.75, tocuyito: 1.85, valera: 1.45, san_cristobal: 1.35, merida: 1.35 }
    },
    {
      id: "pavo-pie", nombre: "Pavo Pecuario Pie", categoria: "Pecuarios",
      unidad: "kg en pie", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 2.40, coche: 5.15, mercamara: 4.80, mercabar: 4.10, tocuyito: 4.55, valera: 4.00, san_cristobal: 3.85, merida: 3.85 }
    },
    {
      id: "conejo-pie", nombre: "Conejo Pecuario Pie", categoria: "Pecuarios",
      unidad: "kg en pie", ajustada_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 3.00, coche: 7.00, mercamara: 6.50, mercabar: 5.65, tocuyito: 6.10, valera: 5.25, san_cristobal: 5.00, merida: 5.00 }
    },
    {
      id: "miel-abeja", nombre: "Miel Abeja Tambo", categoria: "Pecuarios",
      unidad: "litro", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 3.00, coche: 7.50, mercamara: 6.75, mercabar: 5.50, tocuyito: 6.25, valera: 5.65, san_cristobal: 5.35, merida: 5.35 }
    },
    {
      id: "cera-abeja", nombre: "Cera de Abeja Virgen", categoria: "Pecuarios",
      unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 2.50, coche: 6.25, mercamara: 5.75, mercabar: 4.60, tocuyito: 5.15, valera: 4.85, san_cristobal: 4.60, merida: 4.60 }
    },
    {
      id: "polen", nombre: "Polen de Abeja", categoria: "Pecuarios",
      unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 6.00, coche: 17.50, mercamara: 16.00, mercabar: 13.00, tocuyito: 15.00, valera: 14.00, san_cristobal: 13.00, merida: 13.00 }
    },

    // ==================== PESCADOS Y MARISCOS (156-170) ====================
    {
      id: "camaron-cultivo", nombre: "Camarón de Cultivo", categoria: "Pescados y mariscos",
      unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 3.50, coche: 5.50, mercamara: 5.20, mercabar: 4.80, tocuyito: 5.00, valera: 5.00, san_cristobal: 4.50, merida: 4.50 }
    },
    {
      id: "cachama", nombre: "Cachama", categoria: "Pescados y mariscos",
      unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 2.20, coche: 3.50, mercamara: 3.30, mercabar: 3.00, tocuyito: 3.20, valera: 3.00, san_cristobal: 2.80, merida: 2.80 }
    },
    {
      id: "tilapia", nombre: "Tilapia", categoria: "Pescados y mariscos",
      unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 2.60, coche: 4.00, mercamara: 3.80, mercabar: 3.50, tocuyito: 3.70, valera: 3.50, san_cristobal: 3.30, merida: 3.30 }
    },
    {
      id: "coporo", nombre: "Coporo", categoria: "Pescados y mariscos",
      unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 1.10, coche: 2.30, mercamara: 2.10, mercabar: 1.85, tocuyito: 2.00, valera: 1.85, san_cristobal: 1.70, merida: 1.70 }
    },
    {
      id: "sardina", nombre: "Sardina (captura)", categoria: "Pescados y mariscos",
      unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 0.35, coche: 1.20, mercamara: 1.10, mercabar: 0.95, tocuyito: 1.05, valera: 1.00, san_cristobal: 0.90, merida: 0.90 }
    },
    {
      id: "carite", nombre: "Carite", categoria: "Pescados y mariscos",
      unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 2.20, coche: 4.00, mercamara: 3.70, mercabar: 3.40, tocuyito: 3.60, valera: 3.40, san_cristobal: 3.20, merida: 3.20 }
    },
    {
      id: "cojinua", nombre: "Cojinúa", categoria: "Pescados y mariscos",
      unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 2.20, coche: 4.00, mercamara: 3.70, mercabar: 3.40, tocuyito: 3.60, valera: 3.40, san_cristobal: 3.20, merida: 3.20 }
    },
    {
      id: "roncador", nombre: "Roncador", categoria: "Pescados y mariscos",
      unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 2.20, coche: 4.00, mercamara: 3.70, mercabar: 3.40, tocuyito: 3.60, valera: 3.40, san_cristobal: 3.20, merida: 3.20 }
    },
    {
      id: "bagre-rayado", nombre: "Bagre Rayado", categoria: "Pescados y mariscos",
      unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 4.50, coche: 5.80, mercamara: 5.60, mercabar: 5.30, tocuyito: 5.50, valera: 5.30, san_cristobal: 5.00, merida: 5.00 }
    },
    {
      id: "atun-aleta", nombre: "Atún Aleta Amarilla", categoria: "Pescados y mariscos",
      unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 3.75, coche: 5.50, mercamara: 5.20, mercabar: 4.90, tocuyito: 5.10, valera: 5.00, san_cristobal: 4.70, merida: 4.70 }
    },
    {
      id: "robalo", nombre: "Róbalo", categoria: "Pescados y mariscos",
      unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 5.00, coche: 7.20, mercamara: 6.90, mercabar: 6.50, tocuyito: 6.70, valera: 6.60, san_cristobal: 6.20, merida: 6.20 }
    },
    {
      id: "camaron-pelado", nombre: "Camarón Pelado", categoria: "Pescados y mariscos",
      unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 5.00, coche: 6.00, mercamara: 5.80, mercabar: 5.50, tocuyito: 5.70, valera: 6.20, san_cristobal: 5.50, merida: 5.50 }
    },
    {
      id: "calamar", nombre: "Calamar", categoria: "Pescados y mariscos",
      unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 4.50, coche: 6.50, mercamara: 6.20, mercabar: 5.80, tocuyito: 6.00, valera: 6.00, san_cristobal: 5.70, merida: 5.70 }
    },
    {
      id: "palagar", nombre: "Palagar", categoria: "Pescados y mariscos",
      unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 4.00, coche: 5.20, mercamara: 5.00, mercabar: 4.80, tocuyito: 4.90, valera: 4.80, san_cristobal: 4.50, merida: 4.50 }
    },
    {
      id: "corocoro", nombre: "Corocoro", categoria: "Pescados y mariscos",
      unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 1.80, coche: 3.20, mercamara: 3.00, mercabar: 2.75, tocuyito: 2.90, valera: 2.80, san_cristobal: 2.65, merida: 2.65 }
    },

    // ==================== AGROINDUSTRIALES (171-182) ====================
    {
      id: "cana-azucar", nombre: "Caña de Azúcar", categoria: "Agroindustriales",
      unidad: "tonelada", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 33.00, coche: 0, mercamara: 0, mercabar: 0, tocuyito: 0, valera: 0, san_cristobal: 0, merida: 0 }
    },
    {
      id: "tabaco", nombre: "Tabaco en Rama", categoria: "Agroindustriales",
      unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 1.00, coche: 3.00, mercamara: 2.60, mercabar: 2.10, tocuyito: 2.50, valera: 2.35, san_cristobal: 2.25, merida: 2.25 }
    },
    {
      id: "algodon", nombre: "Algodón Fibra", categoria: "Agroindustriales",
      unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 0.65, coche: 0, mercamara: 0, mercabar: 0, tocuyito: 0, valera: 0, san_cristobal: 0, merida: 0 }
    },
    {
      id: "palma-aceitera", nombre: "Palma Aceitera", categoria: "Agroindustriales",
      unidad: "tonelada fruto", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 100.00, coche: 0, mercamara: 0, mercabar: 0, tocuyito: 0, valera: 0, san_cristobal: 0, merida: 0 }
    },
    {
      id: "sisal", nombre: "Sisal Fibra", categoria: "Agroindustriales",
      unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 0.90, coche: 0, mercamara: 0, mercabar: 0, tocuyito: 0, valera: 0, san_cristobal: 0, merida: 0 }
    },
    {
      id: "papelon-caja", nombre: "Papelón Caja (24 un)", categoria: "Agroindustriales",
      unidad: "caja 24 un", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 9.50, coche: 21.00, mercamara: 19.00, mercabar: 15.50, tocuyito: 17.50, valera: 16.50, san_cristobal: 15.50, merida: 15.50 }
    },
    {
      id: "papelon-granulado", nombre: "Papelón Granulado", categoria: "Agroindustriales",
      unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 0.30, coche: 1.00, mercamara: 0.95, mercabar: 0.72, tocuyito: 0.85, valera: 0.77, san_cristobal: 0.72, merida: 0.72 }
    },
    {
      id: "casabe", nombre: "Casabe Grande Fardo", categoria: "Agroindustriales",
      unidad: "fardo 10 tortas", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 4.25, coche: 11.50, mercamara: 12.50, mercabar: 9.50, tocuyito: 10.50, valera: 12.50, san_cristobal: 11.50, merida: 11.50 }
    },
    {
      id: "casabitos", nombre: "Casabitos Tostados Bulto", categoria: "Agroindustriales",
      unidad: "bulto", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 2.50, coche: 7.50, mercamara: 8.00, mercabar: 6.00, tocuyito: 6.80, valera: 8.00, san_cristobal: 7.50, merida: 7.50 }
    },
    {
      id: "harina-yuca", nombre: "Harina Yuca Artesanal", categoria: "Agroindustriales",
      unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 0.38, coche: 1.30, mercamara: 1.18, mercabar: 0.85, tocuyito: 1.05, valera: 1.10, san_cristobal: 1.05, merida: 1.05 }
    },
    {
      id: "almidon-yuca", nombre: "Almidón Yuca Dulce", categoria: "Agroindustriales",
      unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 0.60, coche: 1.90, mercamara: 1.75, mercabar: 1.30, tocuyito: 1.55, valera: 1.65, san_cristobal: 1.55, merida: 1.55 }
    },
    {
      id: "frijol-tapiramo", nombre: "Frijol Bayo Tapiramo", categoria: "Agroindustriales",
      unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 0.60, coche: 2.00, mercamara: 1.80, mercabar: 1.35, tocuyito: 1.60, valera: 1.45, san_cristobal: 1.35, merida: 1.35 }
    },

    // ==================== OTROS (183-200) ====================
    {
      id: "estiercol-gallina", nombre: "Estiércol Gallina", categoria: "Otros",
      unidad: "saco 40 kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 0.65, coche: 2.75, mercamara: 2.40, mercabar: 1.60, tocuyito: 2.00, valera: 1.35, san_cristobal: 1.20, merida: 1.20 }
    },
    {
      id: "humus", nombre: "Humus Lombriz Líquido", categoria: "Otros",
      unidad: "litro", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 1.00, coche: 3.75, mercamara: 3.40, mercabar: 2.50, tocuyito: 3.00, valera: 2.75, san_cristobal: 2.50, merida: 2.50 }
    },
    {
      id: "estiercol-vacuno", nombre: "Estiércol Vacuno", categoria: "Otros",
      unidad: "saco", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 0.38, coche: 1.85, mercamara: 1.60, mercabar: 1.15, tocuyito: 1.35, valera: 1.00, san_cristobal: 0.90, merida: 0.90 }
    },
    {
      id: "lana-ovino", nombre: "Lana Ovino Sucia", categoria: "Otros",
      unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 0.28, coche: 1.25, mercamara: 1.13, mercabar: 0.75, tocuyito: 0.93, valera: 0.65, san_cristobal: 0.60, merida: 0.60 }
    },
    {
      id: "cuajos", nombre: "Cuajos Líquidos Artesanal", categoria: "Otros",
      unidad: "litro", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 2.00, coche: 6.00, mercamara: 5.50, mercabar: 4.15, tocuyito: 4.75, valera: 4.50, san_cristobal: 4.15, merida: 4.15 }
    },
    {
      id: "chicharron", nombre: "Chicharrón con Carne", categoria: "Otros",
      unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 3.00, coche: 8.25, mercamara: 7.65, mercabar: 6.00, tocuyito: 6.90, valera: 6.50, san_cristobal: 6.35, merida: 6.35 }
    },
    {
      id: "manteca-cerdo", nombre: "Manteca Cerdo Pura", categoria: "Otros",
      unidad: "litro", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 1.00, coche: 3.00, mercamara: 2.75, mercabar: 2.15, tocuyito: 2.50, valera: 2.35, san_cristobal: 2.25, merida: 2.25 }
    },
    {
      id: "chiguire", nombre: "Carne de Chigüire", categoria: "Otros",
      unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 2.15, coche: 5.25, mercamara: 4.85, mercabar: 4.15, tocuyito: 4.55, valera: 4.75, san_cristobal: 4.50, merida: 4.50 }
    },
    {
      id: "huevos-codorniz", nombre: "Huevos Codorniz Bulto", categoria: "Otros",
      unidad: "bulto", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 9.50, coche: 19.00, mercamara: 17.50, mercabar: 14.00, tocuyito: 16.00, valera: 15.00, san_cristobal: 14.00, merida: 14.00 }
    },
    {
      id: "codorniz", nombre: "Codorniz Beneficiada", categoria: "Otros",
      unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 1.40, coche: 4.00, mercamara: 3.65, mercabar: 3.05, tocuyito: 3.35, valera: 3.50, san_cristobal: 3.30, merida: 3.30 }
    },
    {
      id: "pato-pie", nombre: "Pato Vivo Pecuario", categoria: "Otros",
      unidad: "kg en pie", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 1.85, coche: 4.30, mercamara: 3.95, mercabar: 3.40, tocuyito: 3.75, valera: 3.20, san_cristobal: 3.10, merida: 3.10 }
    },
    {
      id: "guisantes", nombre: "Guisantes en Vaina", categoria: "Otros",
      unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 1.85, coche: 5.25, mercamara: 5.90, mercabar: 4.15, tocuyito: 4.70, valera: 3.30, san_cristobal: 3.00, merida: 3.00 }
    },
    {
      id: "alcachofa", nombre: "Alcachofa", categoria: "Otros",
      unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 2.50, coche: 7.50, mercamara: 8.25, mercabar: 6.00, tocuyito: 6.80, valera: 4.75, san_cristobal: 4.25, merida: 4.25 }
    },
    {
      id: "esparragos", nombre: "Espárragos Verdes", categoria: "Otros",
      unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 4.25, coche: 11.00, mercamara: 12.25, mercabar: 9.00, tocuyito: 10.00, valera: 7.50, san_cristobal: 6.75, merida: 6.75 }
    },
    {
      id: "cebollino-chino", nombre: "Cebollino Chino", categoria: "Otros",
      unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 1.00, coche: 3.60, mercamara: 3.95, mercabar: 2.70, tocuyito: 3.15, valera: 2.20, san_cristobal: 2.00, merida: 2.00 }
    },
    {
      id: "echalote", nombre: "Echalote / Shallots", categoria: "Otros",
      unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 2.15, coche: 6.00, mercamara: 6.65, mercabar: 4.50, tocuyito: 5.20, valera: 3.85, san_cristobal: 3.60, merida: 3.60 }
    },
    {
      id: "champinon", nombre: "Champiñón / Setas", categoria: "Otros",
      unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 4.80, coche: 0, mercamara: 0, mercabar: 0, tocuyito: 0, valera: 0, san_cristobal: 0, merida: 0 }
    },
    {
      id: "merey-procesado", nombre: "Almendra Merey Procesada", categoria: "Otros",
      unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 4.25, coche: 10.50, mercamara: 9.75, mercabar: 8.25, tocuyito: 9.15, valera: 9.50, san_cristobal: 9.00, merida: 9.00 }
    },
    {
      id: "macadamia", nombre: "Nuez Macadamia Nacional", categoria: "Otros",
      unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 4.75, coche: 12.00, mercamara: 11.25, mercabar: 9.50, tocuyito: 10.40, valera: 10.75, san_cristobal: 10.25, merida: 10.25 }
    },
    // ==================== RUBROS FALTANTES ====================
    {
      id: "jobo", nombre: "Jobo de la India", categoria: "Frutas",
      unidad: "cesta 18 kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 3.50, coche: 13.00, mercamara: 12.00, mercabar: 8.50, tocuyito: 10.75, valera: 11.75, san_cristobal: 10.50, merida: 10.50 }
    },
    {
      id: "pumarosa", nombre: "Pumarosa", categoria: "Frutas",
      unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 0.65, coche: 2.50, mercamara: 2.70, mercabar: 1.85, tocuyito: 2.20, valera: 2.40, san_cristobal: 2.20, merida: 2.20 }
    },
    {
      id: "lulo", nombre: "Lulo / Naranjilla", categoria: "Frutas",
      unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 0.75, coche: 2.60, mercamara: 2.90, mercabar: 2.10, tocuyito: 2.35, valera: 1.55, san_cristobal: 1.35, merida: 1.35 }
    },
    {
      id: "uva-negra", nombre: "Uva Criolla Negra", categoria: "Frutas",
      unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 1.20, coche: 3.20, mercamara: 2.85, mercabar: 2.15, tocuyito: 2.60, valera: 2.30, san_cristobal: 2.10, merida: 2.10 }
    },
    {
      id: "higo", nombre: "Higo Fresco", categoria: "Frutas",
      unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 2.50, coche: 7.25, mercamara: 7.75, mercabar: 5.50, tocuyito: 6.35, valera: 4.75, san_cristobal: 4.25, merida: 4.25 }
    },
    {
      id: "tuna", nombre: "Tuna / Higo Chumbo", categoria: "Frutas",
      unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 0.65, coche: 2.50, mercamara: 2.20, mercabar: 1.55, tocuyito: 1.85, valera: 1.50, san_cristobal: 1.35, merida: 1.35 }
    },
    {
      id: "carambola", nombre: "Carambola", categoria: "Frutas",
      unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 0.42, coche: 1.70, mercamara: 1.50, mercabar: 1.15, tocuyito: 1.38, valera: 1.25, san_cristobal: 1.15, merida: 1.15 }
    },
    {
      id: "guama", nombre: "Guama (Unidad)", categoria: "Frutas",
      unidad: "unidad", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 0.12, coche: 0.50, mercamara: 0.43, mercabar: 0.32, tocuyito: 0.40, valera: 0.38, san_cristobal: 0.33, merida: 0.33 }
    },
    {
      id: "anon", nombre: "Anón / Riñón", categoria: "Frutas",
      unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 0.75, coche: 3.00, mercamara: 2.60, mercabar: 2.00, tocuyito: 2.45, valera: 2.60, san_cristobal: 2.40, merida: 2.40 }
    },
    {
      id: "caimito", nombre: "Caimito", categoria: "Frutas",
      unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 0.50, coche: 2.15, mercamara: 1.90, mercabar: 1.40, tocuyito: 1.75, valera: 1.85, san_cristobal: 1.70, merida: 1.70 }
    },
    {
      id: "corozo", nombre: "Corozo", categoria: "Frutas",
      unidad: "saco 30 kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 4.00, coche: 15.00, mercamara: 12.50, mercabar: 10.00, tocuyito: 11.75, valera: 13.00, san_cristobal: 12.00, merida: 12.00 }
    },
    {
      id: "merey-fruta", nombre: "Merey Manzana Fruta", categoria: "Frutas",
      unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 0.28, coche: 1.25, mercamara: 1.10, mercabar: 0.75, tocuyito: 0.93, valera: 1.00, san_cristobal: 0.93, merida: 0.93 }
    },
    {
      id: "melocoton", nombre: "Melocotón Tovar", categoria: "Frutas",
      unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 1.40, coche: 3.70, mercamara: 4.10, mercabar: 3.05, tocuyito: 3.35, valera: 2.80, san_cristobal: 2.60, merida: 2.60 }
    },
    {
      id: "pitahaya", nombre: "Pitahaya Nacional", categoria: "Frutas",
      unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 3.25, coche: 9.25, mercamara: 10.00, mercabar: 6.75, tocuyito: 8.00, valera: 8.50, san_cristobal: 7.75, merida: 7.75 }
    },
    {
      id: "panocha", nombre: "Panocha de Cambur", categoria: "Frutas",
      unidad: "unidad", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 0.12, coche: 0.62, mercamara: 0.50, mercabar: 0.40, tocuyito: 0.50, valera: 0.43, san_cristobal: 0.38, merida: 0.38 }
    },
    {
      id: "mamey", nombre: "Mamey Colorado", categoria: "Frutas",
      unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 0.50, coche: 1.85, mercamara: 1.70, mercabar: 1.25, tocuyito: 1.50, valera: 1.60, san_cristobal: 1.50, merida: 1.50 }
    },
    {
      id: "curuba", nombre: "Curuba", categoria: "Frutas",
      unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 0.90, coche: 3.05, mercamara: 3.35, mercabar: 2.40, tocuyito: 2.70, valera: 1.80, san_cristobal: 1.60, merida: 1.60 }
    },
    {
      id: "tomate-arbol", nombre: "Tomate de Árbol", categoria: "Frutas",
      unidad: "kg", ajuste_temporada: 0, fecha: "2026-10-15",
      precios: { finca: 0.65, coche: 2.25, mercamara: 2.55, mercabar: 1.80, tocuyito: 2.00, valera: 1.45, san_cristobal: 1.25, merida: 1.25 }
    }
  ]
};