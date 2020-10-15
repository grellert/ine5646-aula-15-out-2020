
// Servidor HTTP
const express = require('express') // include express
const app = express() // cria o servidor

app.use(express.static('cliente'))
app.listen(3000, () => console.log('escutando na porta 3000'));

// Servidor MongoDB
const {MongoClient} = require('mongodb');

const MONGO_URL = `mongodb://localhost/27017`;
var client = new MongoClient(MONGO_URL, {useUnifiedTopology: true});
var dicionario = null;

// conectando no banco e linkando a coleção com a var dicionario
client.connect((err, conn) => {
  if(err) console.dir(err);
  
  db = conn.db('dicionario');
  dicionario = db.collection('palavras');
});

// responde a um GET pela URL /buscapalavra com route param
app.get('/buscapalavra/:palavra', (req, res) => {
  // FIX ME - pega a palavra da URL e busca sua definicao

  res.send("FIX ME");
})

function printDefinition(collection, palavra){
  // FIX ME - busca a palavra na collection

}
