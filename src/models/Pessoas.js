const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const PessoasSchema = new mongoose.Schema({
    nome: {
        type: String,
        require: true,
    },
    cpf: {
        type: String,
        require: true,
    },
    cnpj: {
        type:String,
        require: true,
    },
    celular: {
        type: String,
        require: true,
    },
    telefone: {
        type: String,
        require: true,
    },
    cep: {
        type: String,
        require: true,
    },
    numero: {
        type: Number,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    criadoEm: {
        type: Date,
        default: Date.now,
    },
    alteradoEm: {
        type: Date,
        default: Date.now,
    },
});

PessoasSchema.plugin(mongoosePaginate);

mongoose.model("Pessoas", PessoasSchema);
