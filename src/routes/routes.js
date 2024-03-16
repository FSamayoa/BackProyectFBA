const {Router} = require ("express")
const getAllMatches = require('../../controllers/controllerGetTeamsTest')

const routes = Router();

routes.get('/', getAllMatches)
   

module.exports = routes