const express = require('express');
const router = express.Router();
const Paciente = require('../models/Paciente');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Cadastro
router.post('/register', async (req, res) => {
  const { nome, email, cpf, telefone, senha } = req.body;

  try {
    const senhaCriptografada = await bcrypt.hash(senha, 10);
    const novoPaciente = new Paciente({ nome, email, cpf, telefone, senha: senhaCriptografada });
    await novoPaciente.save();
    res.status(201).json({ message: 'Paciente cadastrado com sucesso' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao cadastrar paciente' });
  }
});

// Login
router.post('/login', async (req, res) => {
  const { email, senha } = req.body;

  try {
    const paciente = await Paciente.findOne({ email });
    if (!paciente) return res.status(404).json({ error: 'Usuário não encontrado' });

    const senhaCorreta = await bcrypt.compare(senha, paciente.senha);
    if (!senhaCorreta) return res.status(401).json({ error: 'Senha incorreta' });

    const token = jwt.sign({ id: paciente._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

    res.json({ message: 'Login bem-sucedido', token });
  } catch (err) {
    res.status(500).json({ error: 'Erro no login' });
  }
});

module.exports = router;
