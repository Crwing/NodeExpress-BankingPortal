const fs = require('fs');
const path = require('path');

const accountData = fs.readFileSync(__dirname + '\\json\\accounts.json', {encoding:'utf-8'});
const accounts  = JSON.parse(accountData);


const userData = fs.readFileSync(__dirname + '\\json\\users.json', {encoding:'utf-8'});
const users   = JSON.parse(userData);

const writeJSON = (data, fileName) => {
    let dataJSON = JSON.stringify(data, null, 4);
    fs.writeFileSync(path.join(__dirname, 'json', fileName), dataJSON, 'utf8');
}

module.exports = {
    accounts, users, writeJSON
}
