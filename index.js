const express = require('express');
const app = express();
const cors = require('cors')

const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello world')
})
const users = [

    { id: 1, name: 'Sabana', email: 'sabana@gmail.com', phone: '017888888' },
    { id: 2, name: 'Shabnur', email: 'shabnur@gmail.com', phone: '017888888' },
    { id: 3, name: 'Sabina', email: 'sabina@gmail.com', phone: '017888888' },
    { id: 4, name: 'Kabila', email: 'kabila@gmail.com', phone: '017888888' },
    { id: 5, name: 'Maliha', email: 'maliha@gmail.com', phone: '017888888' },
    { id: 6, name: 'Suchorita', email: 'suchorita@gmail.com', phone: '017888888' },
    { id: 7, name: 'Kobita', email: 'kobita@gmail.com', phone: '017888888' },

]
app.get('/users', (req, res) => {
    // filter by search query parameter
    if (req.query.name) {
        const search = req.query.name.toLowerCase()
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched);
    } else {
        res.send(users)
    }
})

// search with id

app.get('/user/:id', (req, res) => {
    const id = parseInt(req.params.id);
    // const user = users[id];
    const user = users.find(u => u.id === id);
    res.send(user)
})

app.post('/user', (req, res) => {
    console.log(req.body)
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user)
})

app.listen(port, () => {
    console.log('App is running on', port);
})
