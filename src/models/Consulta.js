const mongoose = require('mongoose');

const consultaSchema = new mongoose.Schema({
  paciente: { type: mongoose.Schema.Types.ObjectId, ref: 'Paciente' },
  medico: { type: mongoose.Schema.Types.ObjectId, ref: 'Medico' },
  dataHora: Date
});

module.exports = mongoose.model('Consulta', consultaSchema);

// routes/consultas.js
const express = require('express');
const router = express.Router();
const Consulta = require('/models/agendamento');

router.post('/', async (req, res) => {
  const { paciente, medicoId, horario } = req.body;

  if (!paciente || !medicoId || !horario)
    return res.status(400).json({ error: 'Campos obrigatórios faltando' });

  try {
    const consulta = new Consulta({ paciente, medicoId, horario });
    await consulta.save();
    res.json({ message: 'Consulta agendada com sucesso!' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao agendar consulta' });
  }
});

module.exports = router;
