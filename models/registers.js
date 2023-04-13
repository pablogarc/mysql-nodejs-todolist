const { pool } = require("../database/db")
require("dotenv").config();

class Register {

  async insert(registerData) {
    try {
      await pool.query('INSERT INTO registro(task) VALUES (?)', [registerData.task]);
      return true;
    } catch (err) {
      return false;
    }
  }

  async update(id, registerData) {
    try {
      await pool.query('UPDATE registro SET task = ? WHERE id = ?', [registerData.task, id]);
      return true;
    } catch (err) {
      return false;
    }
  }

  async delete(id) {
    try {
      await pool.query('DELETE FROM registro WHERE id = ?', [id]);
      return true;
    } catch (err) {
      return false;
    }
  }
}

module.exports = new Register();