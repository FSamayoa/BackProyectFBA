const {Router} = require ("express")
const routesWeek = Router();
const getWeekTeams = require('../../controllers/controllerGetWeekTeams')


routesWeek.get('/', getWeekTeams)
   

module.exports = routesWeek