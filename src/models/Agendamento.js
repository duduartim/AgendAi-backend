const mongoose = require('mongoose');

const agendamentoSchema = new mongoose.Schema({
  pacienteId: { type: mongoose.Schema.Types.ObjectId, ref: 'Paciente' },
  profissional: String,
  data: Date,
  confirmado: Boolean
});

module.exports = mongoose.model('Agendamento', agendamentoSchema);
