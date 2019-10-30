const bcrypt = require("bcryptjs");

module.exports = {
  login: async (req, res) => {
    const { username, password } = req.body;
    const db = req.app.get("db");

    let foundUser = await db.check_username(username);
    foundUser = foundUser[0];
    if (!foundUser) {
      return res.status(401).send("username incorrect");
    }
    const authenticate = bcrypt.compareSync(password, foundUser.admin_password);

    if (authenticate) {
      delete foundUser.admin_password;
      req.session.user = foundUser;
      return res.status(200).send(req.session.user);
    } else {
      return res.status(401).send("password incorrect");
    }
  },

  register: async (req, res) => {
    const { username, password } = req.body;
    const db = req.app.get("db");

    const result = await db.check_username(username);
    const newUser = result[0];
    if (newUser) {
      return res.status(409).send("username not available");
    }
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const registerUser = await db.register_admin(username, hash);
    const user = registerUser[0];
    req.session.user = { username: user.username, id: user.id };
    return res.status(200).send(req.session.user);
  }
};
