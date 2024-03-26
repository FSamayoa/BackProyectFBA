const supabase = require("../supabase");

async function getAllMatches(req, res) {
  try {

    const { data, error } = await supabase
    .from('part')
    .select('*, list_locales (id, nom_local) ,list_visita (id, nom_visita)');

    if (error) {
        console.error('Error al obtener datos de Supabase:', error.message);
        return res.status(500).json({ error: error.message });
    }
    res.json(data);
  } catch (error){
    console.error("Error al obtener equipos:", error.message);
    res.status(500).json({ error: "Error interno del servidor" });
  }
}

module.exports = getAllMatches
