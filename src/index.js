import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './global.css'


import App from './componets/App'

const container = document.getElementById('app');

ReactDOM.render(<App />,container);
// ReactDOM.render(
//     <Badge 
//     name='Angel'
//     lastname='Sifuentes'
//     jobtitle='Web Developer'
//     avatar='https://es.gravatar.com/userimage/170163826/557e113f09223a3c9fab2b54903874e3.jpg'
//     twitter='angeldeux'
//     />,container);

// const jsx = <h1>Hello, Platzi Badges from React!</h1>
//Alternativas sin usar jsx 
//formado de 3 atributos la etiqueta, sus caracteristicas y el valor o el contenido
//const element = React.createElement('h1',{},'Hola soy angel');
// const element = React.createElement(
//     'a',
//     {href: 'https:platzi.com'},
//     'ir a platzi');
 // name = 'Angel';
// const element =React.createElement('h1',{}, `Hola, soy ${name}`);
//usando jsx
// const jsx = <h1>Hola soy, {name}</h1>
// const sum = () => 3 + 3;
// const jsx = <h1>Hola soy, {sum()}</h1>


// const jsx = (
//     <div>
//         <h1>Hola, soy {name}</h1>
//         <p>Soy ingeniero FrontEnd</p>
//     </div>
// );
//lo mismo que lo de arriba pero sin usar jsx es menos entendible y mas tedioso
// const element = React.createElement(
//     'div',
//     {},
//     React.createElement('h1',{},'Hola, soy Israel'),
//     React.createElement('p',{},'soy ingeniero de la web')
// );
//const container = document.getElementById('app');

//ReactDOM.render(que, donde);
//ReactDOM.render(jsx,container);
