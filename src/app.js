const fs = require('fs');
const path = require('path');
const express = require('express');
const exp = require('constants');

const app = express();

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

const accountData = fs.readFileSync(__dirname + '\\json\\accounts.json', {encoding:'utf-8'});
const accounts  = JSON.parse(accountData);


const userData = fs.readFileSync(__dirname + '\\json\\users.json', {encoding:'utf-8'});
const users   = JSON.parse(userData);

app.get('/', async (req, res, next ) => {

    const importData = {
        title: 'Account Summary',
        accounts: accounts
    }
    res.render('index', importData);
});

app.get('/savings', (req, res, next) => {
    res.render('account', { account: accounts.savings});
});

app.get('/checking', (req, res, next) => {
    res.render('account', { account: accounts.checking});
});

app.get('/credit', (req, res, next) => {
    res.render('account', { account: accounts.credit});
});

app.get('/profile', (req, res) =>  res.render('profile', { user: users[0] }));

app.listen(3000, () => {
    console.log('PS Project Running on Port 3000');
});

