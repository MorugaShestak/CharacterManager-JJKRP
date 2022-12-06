const {QuickDB} = require('quick.db')
const db = new QuickDB({filePath: '../database.sqlite'})

async function delWeapon(id, weapon) {
    let users = db.table('users')
    return users.pull(id + ".weapons", weapon).then((r) => console.log("Successfully deleted " + weapon + " from inventory")).catch(e => console.log(e))
}

module.exports = {delWeapon}