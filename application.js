
const express     =            require('express');
const { engine }  = require('express-handlebars');
const body_parser =        require('body-parser');
const path        =               require('path');

const express_framework = express();

global.router = express.Router();

express_framework.engine(  'handlebars', engine());
express_framework.set('view engine', 'handlebars');

express_framework.use(body_parser.urlencoded({ extended: false }));
express_framework.use(                         body_parser.json());

express_framework.use(express.static(path.join(__dirname, 'assets')));

/* Routes */

require(            './routes/index.js');
require('./routes/encryptor/encrypt.js');

express_framework.use('/', global.router);

/* ------ */

/* Server Listening */

express_framework.listen(3012);