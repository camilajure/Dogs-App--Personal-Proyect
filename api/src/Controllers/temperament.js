require('dotenv').config();
const axios = require('axios');
const { Temperament } = require('../db');
const { API_KEY } = process.env;



//GET




async function getAllTemperament(req, res, next) {
	const { data } = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);

	const allBreed = data.map((b) => { // mapeo todas las razas y me devuelve los temperamentos
		return b.temperament;
	});

	const allJoin = allBreed.map((e) => {  // mapeo todos los temperamentos y me los separa por el split con una coma
		return e && e.split(', ');
	});

	const order = allJoin.flat().sort(); //flat concatena todos los arreglos en uno solo , metodo de ordemiento 

	const dataArray = new Set(order); // 
	let result = [...dataArray];

	const temp = result.map((c) => {
		return {
			name: c || 'Could not get name',
		};
	});

	const temperamentDB = await Temperament.bulkCreate(temp); // creo en la base de datos
	// console.log(temperamentDB);
	res.send(temperamentDB);
}




module.exports={ getAllTemperament};



