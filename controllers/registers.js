const registerModel = require("../models/registers")
const { pool } = require("../database/db")

const allRegisters = async (req, res) => {
    const [response] = await pool.query('SELECT * FROM registro');
    if (!response) return res.status(400).send("Invalid request");
    res.status(200).json(response);
}

const register = async (req, res) => {
    let id = req.params["id"];
    const [response] = await pool.query('SELECT * FROM registro WHERE id = ?', [id]);
    if (!response || response.length <= 0) return res.status(400).send("Invalid request");
    res.status(200).json(response);
}

const newRegister = (req, res) => {
    let registerData = req.body;
    const response = registerModel.insert(registerData);
    if (!response) return res.status(400).send("Invalid request");
    res.status(200).send("task created");
}

const updateRegister = (req, res) => {
    let registerData = req.body;
    let id = req.params["id"];
    const response = registerModel.update(id, registerData);
    if (!response) return res.status(400).send("Invalid request");
    res.status(200).send("task updated");
}

const deleteRegister = (req, res) => {
    let id = req.params["id"];
    const response = registerModel.delete(id);
    if (!response) return res.status(400).send("Invalid request");
    res.status(200).send("task deleted");
}


module.exports = {
  allRegisters,
  register,
  newRegister,
  updateRegister,
  deleteRegister
};