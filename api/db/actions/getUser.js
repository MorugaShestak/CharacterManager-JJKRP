const {QuickDB} = require('quick.db')
const db = new QuickDB({filePath: '../database.sqlite'})

async function getUser(id) {
    let users = await db.table('users')
    return await users.get(id)
}

let a = async() => {
    let users = await db.table('users')
    await console.log(await users.get('1'))
}

module.exports = {getUser}