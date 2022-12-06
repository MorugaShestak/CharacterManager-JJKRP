const {QuickDB} = require('quick.db')
const db = new QuickDB({filePath: '../database.sqlite'})

async function addWeapon(id, weapon) {
    let users = db.table('users')
    return users.push(id + ".weapons", weapon).then((r) => console.log("Successfully added " + weapon + " to inventory")).catch(e => console.log(e))
}

module.exports = {addWeapon}
