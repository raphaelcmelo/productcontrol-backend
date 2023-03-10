const { 
  createUser,
  getById,
  getUsers,
  updateUser,
  removeUser,
} = require('../repositories/user');
const bcrypt = require("bcrypt");
const { userValidation } = require('../validations/user')

exports.create = async (req,res) => {
  try {
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const data = await userValidation.parse(req.body)
    const user = await createUser(data);
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
}

exports.get = async (req, res) => {
  try {
    const users = await getUsers();
    res.status(200).send(users);
  } catch (error) {
    res.status(400).send(error);
      }
}

exports.getId = async (req, res) => {
  try {
    const user = await getById(Number(req.params.id));
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
}

exports.update = async (req, res) => {
  try {
    const user = await updateUser(Number(req.params.id), req.body);
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
}

exports.remove =  async (req, res) => {
  try {
    await removeUser(Number(req.params.id));
    res.status(200).send();
  } catch (error) {
    res.status(400).send(error);
  }
}
