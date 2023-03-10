const { authRoutes } = require('./auth');
const { salesRoutes } = require('./sales');
const { userRoutes } = require('./user')

module.exports = (app) => {
  userRoutes(app);
  authRoutes(app);
  salesRoutes(app);
};