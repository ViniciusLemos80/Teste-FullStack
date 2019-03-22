const mongoose = require ('mongoose');

const Pessoas = mongoose.model('Pessoas');

module.exports = {
    async index(req, res) {
        const {page = 1} = req.query
        const pessoas =     await Pessoas.paginate({},{page, limit:10});  
        return res.json(pessoas);
    },

    async cadastrar(req, res) {
        const pessoas = await Pessoas.create(req.body);

        return res.json(pessoas);
    },

    

    async buscar(req, res) {
        const pessoas = await Pessoas.findById(req.params.id);

        return res.json(pessoas);
    },

    async update(req, res){
        const pessoas = await Pessoas.findByIdAndUpdate(req.params.id, req.body, {new: true});

        return res.json(pessoas);
    },

    async delete(req, res){
        await Pessoas.findByIdAndRemove(req.params.id);

        return res.send();
    },
};