import app from './app.js'


const init = async () => {
	await app.listen(3000)
	console.log("Server UP")
}

init()