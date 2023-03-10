const {  create, get, getId, update, remove } = require("../controllers/user");
const { verifyToken } = require("../middlewares/auth");

exports.userRoutes = app => {
  app.post("/user", create);
  app.get("/user", get);
  app.get("/user/:id", verifyToken, getId);
  app.put("/user/:id", verifyToken, update);
  app.delete("/user/:id", verifyToken, remove);
}