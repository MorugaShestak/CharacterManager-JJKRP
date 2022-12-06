const express = require('express')
const bodyParser = require("body-parser");
const {db, getUser, getUsers, initUser, changeUser, addWeapon, delWeapon, getIDS} = require('./db/db')
const PORT = process.env.PORT || 3002;
const app = express();
const router = express.Router()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/ping', (req, res) => {
    res.json({"message": "ping"})
})

app.get('/getUsers', async (req, res) => {
        let users = await getUsers()
        res.json(await users)
})

app.get('/getIDS', async (req, res) => {
        let ids = await getIDS()
        res.json(await ids)
})

app.get('/getUser', async (req, res) => {
        let id = await req.query.id
        let user = await getUser(id)
        res.json(await user)
})

let b = async() => {
        let ids = await db.table('ids')
        return await ids.all()
}

app.post('/addWeapon', async (req, res) => {
        let id = req.body.id
        let weapon = req.body.weapon
        addWeapon(id, weapon)
        res.json({'id': id, 'weapon': weapon, 'message': 'add'})
})

app.post('/delWeapon', async (req, res) => {
        let id = req.body.id
        let weapon = req.body.weapon
        delWeapon(id, weapon)
        res.json({'id': id, 'weapon': weapon, 'message': 'del'})
})

app.post('/initUser', async (req, res) => {

        let ids = await getIDS()
        console.log(await ids)
        // const len = await b.length
        // console.log('LEN = ' + len)
        // const last_id = await b[len]
        // const id = last_id+1
        // console.log("LAST ID = " + last_id)
        // console.log("ID = " + id)
        let id = (parseInt(ids)+1).toString()
        let character_name = req.body.character_name
        let player_name = req.body.player_name
        let oz = req.body.oz
        let pm = req.body.pm
        let completed_quests = req.body.completed_quests
        let failed_quests = req.body.failed_quests
        let dead = req.body.dead

        initUser(id, character_name, player_name, oz, pm, completed_quests, failed_quests, dead).then((r) => res.json(r)).catch(e => console.log(e))

        res.json({"added": true})
});

app.post('/changeUser', (req, res) => {

        let id = req.body.id
        let character_name = req.body.character_name
        let player_name = req.body.player_name
        let oz = req.body.oz
        let pm = req.body.pm
        let completed_quests = req.body.completed_quests
        let failed_quests = req.body.failed_quests
        let dead = req.body.dead

        changeUser(id, character_name, player_name, oz, pm, completed_quests, failed_quests, dead).then((r) => res.json(r)).catch(e => console.log(e))

        res.json({'changed': true})
});

app.listen(PORT, () => {
    console.log('Server listening on port: ' + PORT)
})

module.exports = {app}