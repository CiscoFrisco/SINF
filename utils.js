const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const utils = {

  hashPassword(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8))
  },

  comparePassword(hashPassword, password) {
    return bcrypt.compareSync(password, hashPassword);
  },

  isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  },

  generateToken(id) {
    const token = jwt.sign({
      userId: id
    },
      process.env.SECRET, { expiresIn: '7d' }
    );
    return token;
  },

  setToken(idToken) {
    localStorage.setItem('id_token', idToken)
  },

  getToken() {
    return localStorage.getItem('id_token')
  },

  loggedIn() {
    const token = this.getToken()
    return !!token && !this.isTokenExpired(token)
  },

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      }
      else
        return false;
    }
    catch (err) {
      return false;
    }
  }

}

module.exports = utils;