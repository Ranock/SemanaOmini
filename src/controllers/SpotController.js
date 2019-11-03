const Spot = require('../models/Spot')
const User = require('../models/User')

    module.exports = {
        async index(req, res){
            const {tech} = req.query;
            const spot = await Spot.find({techs : tech})
            return res.json(spot);
        },
        
        async store(req, res){
            const {filename} = req.file;
            const {company, price, techs} = req.body;
            const {user_id} = req.headers;
            const user = await User.findById(user_id); 
            if (!user)
               return res.status(404).json({error : 'Usuario não existe'});

            let spot = await Spot.create({
                company: company,
                user : user_id,
                thumbnail : filename,
                techs : techs.split(',').map(x => x.trim()),
                price: price    
            })
            return res.json(spot);
        }
    }