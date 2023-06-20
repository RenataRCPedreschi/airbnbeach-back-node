const cors = require("cors");
require("dotenv").config();
const express = require("express");
const { connection, authenticate } = require("./database/database");
const app = express();
app.use(express.json());
app.use(cors({origin:"http://localhost:3000"}));


//definição das rotas






authenticate(connection);
connection.sync();


app.listen(3001, () => {
    console.log("Servidor rodando em http://localhost:3001/");
  });