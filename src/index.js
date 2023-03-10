const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

require("./routes/index")(app);

app.listen(port, () => {
  console.log(`Servidor on na porta http://localhost:${port}! 🚀`);
} )
