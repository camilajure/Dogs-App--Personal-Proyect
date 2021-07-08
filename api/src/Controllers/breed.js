require('dotenv').config();
const axios = require('axios');
const { API_KEY } = process.env;
const { Breed, Temperament } = require('../db');
const {v4: uuidv4} = require('uuid');

//post
// async function addBreed (req, res,next){
//     const {name,weight, height, life_span, temperament} = req.body;
//     try {
//         let newBreed = await Breed.create({
//             id: uuidv4(),
//             name:name,
//             weight:weight,
//             height:height,
//             life_span:life_span,
//             image:'https://scontent.fsfn4-1.fna.fbcdn.net/v/t1.6435-9/149822040_3780080102085998_1361124862690929614_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=a26aad&_nc_ohc=X7mHRnKpbZUAX_k7U5O&tn=YLWcyZolDJVm5u7y&_nc_ht=scontent.fsfn4-1.fna&oh=32f8afb2e344737e50d599c0d191bc6f&oe=60E8D34B',
//             temperament:temperament
//         });
//         if(newBreed){
//             return res.json({message: 'Breed created sucessfully',
//                     data: newBreed}); 
//         }
//     } catch (err) {
//         next(err)
//     }
                    
// }
async function addBreed(req, res, next) {
	const id = uuidv4();
	const breedBody = {...req.body, id};
	try {
		const createdBreed = await Breed.create(breedBody);
		return res.send(createdBreed);
	} catch (err) {
		next(err);
	}
}



// GET TODAS
// function getAllBreed(req, res, next){

//     const breedApi= axios.get('https://api.thedogapi.com/v1/breeds');
// const breedMine =   Breed.findAll()
// Promise.all([breedApi, breedMine])
//     .then(response => {
//         let [breedApiRes, breedMineRes] = response
//         return res.send(breedMineRes.concat(breedApiRes.data))
//     })

// 		.catch((err) => next(err));
// }



//  funcina abajo
const getAllBreed = async (req, res) => {
	const raza = req.query.name;
	if (raza) {
		const breedDataBase = Breed.findAll({
			where: {
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



async function getAllById(req, res){
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
    catch (error) {
        if(error.response?.status === 404) {
            Breed.findByPk(req.params.id).then(breed => {
        if(breed) return res.send(breed)
            return res.sendStatus(404)
    })
    } else {
        res.status(500).send({ error: 'Ups!!! 😱' })
        }
    }
}

module.exports={
    getAllBreed,
    addBreed,
    getAllById
}