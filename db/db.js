const {QuickDB} = require('quick.db')
const db = new QuickDB({filePath: 'database.sqlite'})
const {getUser} = require('./actions/getUser')
const {getUsers} = require('./actions/getUsers')
const {initUser} = require('./actions/initUser')
const {changeUser} = require('./actions/changeUser')
const {addWeapon} = require('./actions/addWeapon')
const {delWeapon} = require('./actions/delWeapon')
const {getIDS} = require('./actions/getIDS')

module.exports = {db, getUser, getUsers, initUser, changeUser, addWeapon, delWeapon, getIDS}