const express = require('express');
const router = express.Router();
const Agendamento = require('../models/Agendamento');

// Criar agendamento
router.post('/', async (req, res) => {
  const { pacienteId, profissional, data } = req.body;

  try {
    const novoAgendamento = new Agendamento({
      pacienteId,
      profissional,
      data,
      confirmado: true
    });

    await novoAgendamento.save();
    res.status(201).json({ message: 'Consulta agendada com sucesso' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao agendar consulta' });
  }
});

// Buscar agendamentos de um paciente
router.get('/:pacienteId', async (req, res) => {
  try {
    const agendamentos = await Agendamento.find({ pacienteId: req.params.pacienteId });
    res.json(agendamentos);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar agendamentos' });
  }
});

module.exports = router;
