const express = require('express');
const mongoose = require('mongoose');
// const router = express.Router();
const app = express();
// const app2 = new Koa();
const expressEjsLayout = require('express-ejs-layouts');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');

require('./config/passport')(passport);

// mongoose
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true}).then(() => console.log('conectado')).catch((err)=> console.log(err));

// EJS
app.set('view engine', 'ejs'); // diz p Express que o ejs é usado como mecanismo
app.use(expressEjsLayout);

// BodyParser
app.use(express.urlencoded({extended: false}));
// express session
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());
// use flash
app.use(flash());
app.use((req, res, next)=> {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});
// Routes
app.use('/', require('./routes/index'));
app.use('/usuarios', require('./routes/usuarios'));

app.listen(3000);
