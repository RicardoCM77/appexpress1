
import http from 'http';


import express from 'express';

const app = express();
app.use((req, res, next)=>{
    console.log("ejecutando el middleware 1")
    //invocar siguiente miffleware
    next();
});

app.use((req,res, next)=>{
    console.log("registrando peticion entrante")
    console.log("")
    next();
});

app.use((req,res, next)=>{
    console.log("respondiendo al cliente")
    res.send(`
    <h1>welcome to express</h1>
    <p>This is my awesome app</p>
`);
});

const server = http.createServer(app);

//definir puertos

const port = 3000;
const op= "0.0.0.0";

//arrancando el server
server.listen(port, ip, (err)=>{
    console.log("sirviendo el http://localhost:3000");
    console.log("${process.env.ip}:${processs.env.PORT");
});