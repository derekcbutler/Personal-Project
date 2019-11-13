require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;
const adminCtrl = require("./controllers/authController");
const mainCtrl = require("./controllers/mainController");
const app = express();

app.use(express.json());

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("db connected");
});

//?redirects to the build folder
app.use( express.static( `${__dirname}/../build` ) );

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {
      maxAge: 1000 * 60 * 60
    }
  })
);

app.post("/api/register", adminCtrl.register);
app.post("/api/login", adminCtrl.login);
app.delete("/api/logout", adminCtrl.logout);

app.get("/api/leads", adminCtrl.getLeads);
app.post("/api/leads", adminCtrl.newLead);
app.put("/api/leads/:id", adminCtrl.editLead);
app.delete("/api/leads/:id", adminCtrl.deleteLead);

//main controller
app.post('/api/payment', mainCtrl.pay)

const port = SERVER_PORT;

app.listen(port, () => console.log(`Server on ${port}`));
