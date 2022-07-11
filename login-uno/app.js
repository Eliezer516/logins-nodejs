// importamos express
const express  = require('express');
const app      = express()

// hola mundo

// otros modulos
const path     = require('path');
const bcryptjs = require('bcryptjs');
const session  = require('express-session');
const connection = require('./database/db');

// variables de entorno
require('dotenv').config({path: "./env/.env"})

// usamos url encoded
app.use(express.urlencoded({extended: false}))
app.use(express.json())


// archivos staticos
app.use("/resources", express.static("./public"))
app.use("/resources", express.static(path.join(__dirname, "public")))

// sessiones
app.use(session({
	secret: process.env.SESSION_SECRET,
	resave: true,
	saveUninitialized: true
}))

// seteamos el motor de plantillas
app.set("view engine", "ejs")


// Establecemos las rutas
app.get("/", (req, res) => {
	res.render("index", {variable: "desde aqui"})
})

app.get("/login", (req, res) => {
	res.render("login")
})

app.get("/register", (req, res) => {
	res.render("register")
})


// iniciamos el servidor
app.listen(1234, (req, res) => {
	console.log("Server UP!");
})
