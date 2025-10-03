const mongoose = require('mongoose');

const pacienteSchema = new mongoose.Schema({
  nome: String,
  email: { type: String, unique: true },
  cpf: String,
  telefone: String,
  senha: String
});

module.exports = mongoose.model('Paciente', pacienteSchema);
