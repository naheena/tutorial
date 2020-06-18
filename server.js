const express = require('express');
const mustache = require('mustache-express');
const app = express();

app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
    res.render('main');
});

app.use('/build', express.static('build'));

app.listen(8080, () => console.log('server started'));