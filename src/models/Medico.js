const mongoose = require('mongoose');

const medicoSchema = new mongoose.Schema({
  nome: String,
  especialidade: String,
  horarios: [String] // Array de horários disponíveis
});

module.exports = mongoose.model('Medico', medicoSchema);

// routes/medicos.js
const express = require('express');
const router = express.Router();
const Medico = require('/models/medico');

// Listar horários de um médico específico
router.get('/:id/horarios', async (req, res) => {
  try {
    const medico = await Medico.findById(req.params.id);
    if (!medico) return res.status(404).json({ error: 'Médico não encontrado' });
    res.json(medico.horarios);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar horários' });
  }
});

module.exports = router;
