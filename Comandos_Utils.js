//node.js ver versiones de node
sudo npm install -g n;
sudo n
//usando NVM
nvm list
//
sudo npm cache clean -f //(force) clear you npm cache
sudo npm install -g n //install n (this might take a while)
sudo n stable //upgrade to the current stable version
//
npm init --y
npm i express morgan promise-mysql cors
npm install -g typescript

//EN PACKAGE JSON
npm install -g typescript
//comando:
npm run build
//comando para correr el index.js 
node build/index.js
// Instalar nodemon
npm i nodemon -D
//comandos en la package JSON
"scripts": {
    "build": "tsc -w",
    "dev": "nodemon build/index.js"
  },
// EN CADA CONSOLA CORRER EL COMANDO

//install types express morgan y cors
npm i @types/express -D
npm i @types/morgan @types/cors -D

//Crea FRONTEND
npm init --y
sudo npm install -save @angular/common@8
sudo npm install -save @angular/compiler @angular/core @angular/forms @angular/platform-browser @angular/platform-browser-dynamic @angular/router core-js rxjs zone.js

ng new cliente --routing
//crear componentes
ng g c componentes/navegacion
//PARA Crear Servicios
ng g s services/consejos

//Correr el servidor de ANGULAR
ng serve
// Cambiar port en ANGULAR
ng serve --port 4401 

//*************************************  lambda grunt
grunt lambda_invoke

//LOCAL IP
ifconfig | grep inet
//host and port
ng serve --host 192.168.0.17 --port 8887

/////// LOGIN OFFICE 365
npm i hellojs
//
npm i @microsoft/microsoft-graph-client
//
sudo npm install -g npm
//**********************************    GIT  *************************
//clonar repo
git clone repositorio
// CREA RAMA
git checkout -b rama
// hacer seguimiento y posicionarse en rama
git fetch && git checkout miSalud
// pull rama
git pull origin miSalud
// status
git status
//commit
git commit -m “comentario“
// push rama
git push origin master/rama
