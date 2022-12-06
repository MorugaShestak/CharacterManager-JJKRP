const {QuickDB} = require('quick.db')
const db = new QuickDB({filePath: '../database.sqlite'})

let users = db.table('users')

let a = async() => {
    await users.deleteAll()
}

let b = async() => {
    let ids = await db.table('ids')
    ids.deleteAll()
}

let clear = async() => {
    let users = db.table('users')
    let ids = db.table('ids')
    users.deleteAll()
    ids.deleteAll()
}

clear()


