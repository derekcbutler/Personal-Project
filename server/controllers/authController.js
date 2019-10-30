const bcrypt = require("bcryptjs")

module.exports = {
    login: async (req, res) => {
        const {username, password} = req.body;
        const db = req.app.get('db');

        let foundUser = await db.check_username(username);
        foundUser = foundUser[0];
        if(!foundUser){
            res.status(401).send("username incorrect");
        }
        const authenticate = bcrypt.compareSync(
            password,
            foundUser.admin_password
        );

        if (authenticate){
            delete foundUser.admin_password;
            req.session.user = foundUser;
            res.status(200).send(req.session.user);
        } else {
            res.status(401).send("password incorrect")
        }
    },

    register: async(req, res) => {
        const { username, password } = req.body;
        const db = req.app.get('db')

        const result = await db.check_username(username)
        const newUser = result[0]
        if(newUser){
            return res.status(409).send("username not available")
        }
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        const registerAdmin = await db.register_admin(username, hash)
        const admin = registerAdmin[0];
        req.session.admin = {username: admin.username, id: admin.id};
        return res.status(200).send(req.session.admin)
    }
}