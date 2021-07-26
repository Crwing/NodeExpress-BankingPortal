const fs = require('fs');
const path = require('path');
const express = require('express');

const app = new express();

const accountRoutes = require('./routes/accounts.js')
const servicesRoutes = require('./routes/services.js')
const { accounts, users, writeJSON } = require('./data.js');
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));

app.get('/', async (req, res, next ) => {

    const importData = {
        title: 'Account Summary',
        accounts: accounts
    }
    res.render('index', importData);
});

app.use('/account', accountRoutes);
app.use('/services', servicesRoutes);

app.get('/profile', (req, res) =>  res.render('profile', { user: users[0] }));

app.listen(3000, () => {
    console.log('PS Project Running on Port 3000');
});

