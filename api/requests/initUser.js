const bodyParser = require('body-parser')
const {db, getUser, getUsers, initUser, changeUser, addWeapon, delWeapon} = require('../db/db')

module.exports = function (app, router) {
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())

    router.post('/initUser', (req, res) => {
        let id = req.body.id
        let character_name = req.body.character_name
        let player_name = req.body.player_name
        let oz = req.body.oz
        let pm = req.body.pm
        let cp = oz + pm
        let weapons = req.body.weapons
        let completed_quests = req.body.completed_quests
        let failed_quests = req.body.failed_quests
        let dead = req.bod.dead

        initUser(id, character_name, player_name, oz, pm, cp, weapons, completed_quests, failed_quests, dead).then((r) => res.json(r)).catch(e => console.log(e))
    })
}