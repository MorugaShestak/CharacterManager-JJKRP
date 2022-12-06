const {QuickDB} = require('quick.db')
const db = new QuickDB({filePath: '../database.sqlite'})

async function getUsers() {
    let users = db.table('users')
    await console.log(await users.all())
    return await users.all()
}

module.exports = {getUsers}