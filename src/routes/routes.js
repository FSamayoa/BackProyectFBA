const {Router} = require ("express")
const routes = Router();
const getAllMatches = require('../../controllers/controllerGetTeamsTest')


routes.get('/', getAllMatches)

   
module.exports = routes