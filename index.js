const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const pool = require('./config');
const helmet = require('helmet')
const compression = require('compression')
const rateLimit = require('express-rate-limit')
const { body, check } = require('express-validator')
var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const { getPrimaveraToken } = require('./appToken')

const startApp = () => {
  const app = express();

  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));
  
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors());
  app.use(compression());
  app.use(helmet());
  
  const isProduction = process.env.NODE_ENV === 'production'
  const origin = {
    origin: isProduction ? 'http://gitbetter.herokuapp.com/' : '*',
  }
  
  app.use(cors(origin))
  
  // const limiter = rateLimit({
  //   windowMs: 1 * 60 * 1000, // 1 minute
  //   max: 60, // 5 requests,
  // })
  
  // app.use(limiter)
  
  const indexRouter = require('./routes/index');
  const employeesRouter = require('./routes/employees');
  const warehousesRouter = require('./routes/warehouses');
  const purchasesRouter = require('./routes/purchases');
  const salesRouter = require('./routes/sales');
  const stockRouter = require('./routes/stock');
  
  app.use('/api/', indexRouter);
  app.use('/api/employees', employeesRouter);
  app.use('/api/warehouses', warehousesRouter);
  app.use('/api/purchases', purchasesRouter);
  app.use('/api/sales', salesRouter);
  app.use('/api/stock', stockRouter);
  
  // catch 404 and forward to error handler
  app.use(function (req, res, next) {
    next(createError(404));
  });
  
  // error handler
  app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.json({ error: err });
  });
  
  // Start server
  app.listen(process.env.PORT || 3002, () => {
    console.log(`Server listening`);
  })
}

getPrimaveraToken(startApp);