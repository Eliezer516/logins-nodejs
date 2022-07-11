const mysql = require("mysql")

const connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "contrasena",
	database: "login_node_uno",
})

connection.connect((err) => {
	if(err){
		console.log(err);
	} else {
		console.log("Conectado a la DB");
	}
})

module.exports = connection