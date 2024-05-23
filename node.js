
console.log("HELLO WORLD");



const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello Node !!! </h1>\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${'127.0.0.1'}:${3000}/`);
});





const fs = require('fs');


fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) throw err;
  console.log('Fichier welcome.txt créé avec succès !');
});


fs.readFile('welcome.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('Contenu de welcome.txt : ', data);
});




const generatePassword = require('generate-password');


const password = generatePassword.generate({
    length: 12,
    numbers: true
});
console.log('Mot de passe généré : ', password);





const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ndenegeorgesmichelngor@gmail.com', 
    pass: 'NDENE315' 
  }
});


const mailOptions = {
  from: 'ndenegeorgesmichelngor@gmail.com',
  to: 'diaminhondenegmail.com', 
  subject: 'Test Node.js Email',
  text: 'Ceci est un e-mail de test envoyé depuis Node.js'
};


transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('E-mail envoyé: ' + info.response);
  }
});
