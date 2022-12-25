const {QuickDB} = require('quick.db')
const db = new QuickDB({filePath: '../database.sqlite'})

async function getIDS(id) {
    let ids = await db.table('ids')
    let ides = await ids.all()
    if(ides.length === 0) {
        return 0;
    }
    else {
        return await ides[0]['value'].length
    }

}

let a = async() => {
    let users = await db.table('users')
    await console.log(await users.get('1'))
}

module.exports = {getIDS}