const {Router} = require ("express")

const routes = Router();

const supabase = require("../../supabase")

routes.get('/', async (req, res) => {
    try {
        const { data, error } = await supabase.from('equipos').select('*'); 
        if (error) {
            console.error('Error al obtener datos de Supabase:', error.message);
            return res.status(500).json({ error: error.message });
        }
        res.json(data);
    } catch (error) {
        console.error('Error al obtene:', error.message);
        res.status(500).json({ error: 'Error interno del servido dsfsdf' });
    }
});


module.exports = routes