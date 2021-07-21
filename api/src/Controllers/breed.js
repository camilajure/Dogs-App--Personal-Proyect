//require('dotenv').config();
const axios = require('axios');
const { API_KEY } = process.env;
const { Breed, Temperament } = require('../db');
const {v4: uuidv4} = require('uuid');



//post
//FUNCIONA PERO  ME CREA LA TABLA INTERMADIA !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
async function addBreed(req, res, next) {
	//const id = uuidv4();
	const {name,weight, height, life_span, temperament} = req.body
	// const breedBody = {...req.body, id};
	try {
		const createdBreed = await Breed.create({
			id:uuidv4(),
			name: name,
			weight: weight, 
			height: height, 
			life_span: life_span, 
			image: 'https://bit.ly/36J26Nu',
			db: true
		});

		await createdBreed.addTemperament(temperament)
		if(createdBreed){
			return res.json({message: 'Breed created sucessfully',
				data: createdBreed}); 
			}
	} catch (err) {
		next(err);
	}
}



// GET TODAS
const getAllBreed = async (req, res) => {
	const r = req.query.name;
	
// const raza= r.toLowerCase();
	if (r) {
		const raza= r.toLowerCase()
		const breedDataBase = Breed.findAll({
			where: {
				// name:{
				// [Sequelize.Op.iLike]: `%${query}%`, }
				name: raza,
			},
			include: {
				model: Temperament,
			},
		});

		const api = await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${raza}&apikey=${API_KEY}`);
	

		const breed = api.data.map(async (b) => {
			return {
				id: b.id || 'Id not found',
				name: b.name || 'Name not found',
				image:
					'https://cdn2.thedogapi.com/images/' + b.reference_image_id + '.jpg' ||
					'https://scontent.fsfn4-1.fna.fbcdn.net/v/t1.6435-9/213878167_4203688373058500_520078069889842109_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=a26aad&_nc_ohc=YgbPo73GeloAX_8B1cH&_nc_ht=scontent.fsfn4-1.fna&oh=bf5a950858fd6f35db91644a51a2cfd4&oe=60E9A82A',
				temperament: b.temperament || 'Temperament  not found',
				weight: b.weight.metric || 'Weight not found',
				height: b.height.metric || 'Height not found',
				life_span: b.life_span || 'Life span not found',
			};
		});

		const breedApi = await Promise.all(breed);

		Promise.all([breedDataBase, breedApi]).then((results) => {
			const [breedMineResult, apiBreedResult] = results;
			const response = breedMineResult.concat(apiBreedResult);
			res.send(response);
		});
	} else {
		try {
			const breedDataBase = Breed.findAll({
				include: {
					model: Temperament,
				},
			});

			const api = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);

			const breed = api.data.map(async (b) => {
				
				return {
					id: b.id || 'Id not found',
					name: b.name || 'Name not found',
					image:
						b.image.url ||
						'https://scontent.fsfn4-1.fna.fbcdn.net/v/t1.6435-9/213878167_4203688373058500_520078069889842109_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=a26aad&_nc_ohc=YgbPo73GeloAX_8B1cH&_nc_ht=scontent.fsfn4-1.fna&oh=bf5a950858fd6f35db91644a51a2cfd4&oe=60E9A82A',
					temperament: b.temperament || 'Temperament not found',
					weight: b.weight.metric || 'Weight not found',
					height: b.height.metric || 'Height not found',
					life_span: b.life_span || 'Life span not found',
				};
			});

			const breedApi = await Promise.all(breed);

			Promise.all([breedDataBase, breedApi]).then((results) => {
				const [breedMineResult, apiBreedResult] = results;
				const response = breedMineResult.concat(apiBreedResult);
				res.send(response);
			});
		} catch {
			return res.status(400).send('Breed not found');
		}
	}
};
// .toLowerCase().includes(raza)


async function getAllById(req, res, next){
    const {id} = req.params
    try {
        if (id.length > 6) {
			
        const breedDB = await Breed.findByPk(id, {
            include:{
            model:Temperament
            }
        });
        
        return res.json(breedDB);
        } else {
            const {data} = await axios.get(`https://api.thedogapi.com/v1/breeds/${id}?apikey=${API_KEY}`)
            const breed = {
                id: data.id,
                name: data.name,
                image: 'https://cdn2.thedogapi.com/images/' + data.reference_image_id + '.jpg',
                weight: data.weight.metric,
                height: data.height.metric,
                life_span: data.life_span,
                temperament:data.temperament,
    };
        res.send(breed)
} 
}
catch(error){
	next(error)
}
}

module.exports={
    getAllBreed,
    addBreed,
    getAllById
}
