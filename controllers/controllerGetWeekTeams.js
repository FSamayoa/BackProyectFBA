const supabase = require("../supabase");

async function getWeekTeams(req, res) {
  try {

    const { data, error } = await supabase

    .from('part')
    .select('fecha')

    // .from('part')
    // .select(`*,
    //     list_locales (id), 
    //     list_locales (nom_local),
    //     list_visita (id),
    //     list_visita (nom_visita)
    // `)
   
    // .filter('fecha', '>=', '2024-03-20')
    // .filter('fecha', '<=', '2024-03-27');

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

module.exports = getWeekTeams
