const {QuickDB} = require('quick.db')
const db = new QuickDB({filePath: '../database.sqlite'})

async function changeUser(id, character_name, player_name, oz, pm, completed_quests, failed_quests, dead) {
    let users = db.table('users')

    if (character_name) {
        await users.set(id + ".character_name", character_name)
            .then((r) => console.log("Successfully change character name to " + character_name))
            .catch((e) => console.log(e))
    }

    if (player_name) {
        await users.set(id + ".player_name", player_name)
            .then((r) => console.log("Successfully change player name to " + player_name))
            .catch((e) => console.log(e))
    }

    if (oz) {
        await users.set(id + ".oz", oz)
            .then((r) => console.log("Successfully change character oz to " + oz))
            .catch((e) => console.log(e))
    }

    if (pm) {
        await users.set(id + ".pm", pm)
            .then((r) => console.log("Successfully change character pm to " + pm))
            .catch((e) => console.log(e))
    }

    if (completed_quests) {
        await users.set(id + ".completed_quests", completed_quests)
            .then((r) => console.log("Successfully change character completed quests to " + completed_quests))
            .catch((e) => console.log(e))
    }

    if (failed_quests) {
        await users.set(id + ".failed_quests", failed_quests)
            .then((r) => console.log("Successfully change character failed quests to " + failed_quests))
            .catch((e) => console.log(e))
    }

    if (dead) {
        await users.set(id + ".dead", dead)
            .then((r) => console.log("Successfully change character dead status to " + dead))
            .catch((e) => console.log(e))
    }


}

module.exports = {changeUser}