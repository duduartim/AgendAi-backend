const app = require('./src/app');

const PORT = 5000; // ou você pode colocar process.env.PORT se quiser usar variável de ambiente

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
 # AgendAi - Backend

## Sobre
Backend do sistema AgendAi, que permite:
- Cadastro e login de pacientes
- Cadastro de médicos/funcionários
- Agendamento de consultas

## Como rodar

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/AgendAi-backend.git
cd AgendAi-backend
