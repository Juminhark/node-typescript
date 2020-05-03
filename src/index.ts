import express from 'express';
import exphbs from "express-handlebars";
import path from 'path';

// Importing Routes
import IndexRoutes from './routes';
import BooksRoutes from './routes/books'

// Initializstions
const app = express();
import './database';

// Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
  extname: '.hbs',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  helpers: require('./lib/helpers'),
  defaultLayout: 'main'  
}));
app.set('view engine', '.hbs');

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use('/', IndexRoutes)
app.use('/books', BooksRoutes);

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});