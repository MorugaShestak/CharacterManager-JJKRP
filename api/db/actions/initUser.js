const {QuickDB} = require('quick.db')
const db = new QuickDB({filePath: '../database.sqlite'})

async function initUser(id, character_name, player_name, oz, pm, completed_quests, failed_quests, dead) {
    let users = db.table('users')
    let ids = db.table('ids')

    await ids.push('ids', id).then((r) => {console.log(id + " was successfully pushed to ids table")})

    await users.set(id + ".character_name", character_name).then(r => console.log(r)).catch(e=>console.log(e))
    await users.set(id + ".player_name", player_name).then(r => console.log(r)).catch(e=>console.log(e))
    await users.set(id + ".oz", oz).then(r => console.log(r)).catch(e=>console.log(e))
    await users.set(id + ".pm", pm).then(r => console.log(r)).catch(e=>console.log(e))
    await users.set(id + ".completed_quests", completed_quests).then(r => console.log(r)).catch(e=>console.log(e))
    await users.set(id + ".failed_quests", failed_quests).then(r => console.log(r)).catch(e=>console.log(e))
    await users.set(id + ".dead", dead).then(r => console.log(r)).catch(e=>console.log(e))

    await console.log("User was successfully added to table")
    await console.log(await users.get(id))
}

module.exports = {initUser}