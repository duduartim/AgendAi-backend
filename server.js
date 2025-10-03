const app = require('./src/app');

const PORT = 5000; // ou você pode colocar process.env.PORT se quiser usar variável de ambiente

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
 