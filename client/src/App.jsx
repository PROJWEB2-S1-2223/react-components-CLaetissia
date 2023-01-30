import React from 'react';
import './App.css';
import Form from './Form';

const welcome = {
  salut: 'Bonjour',
  mot: 'Vous allez bien ?',
};
const titre = 'Voici votre liste de course';

const list = [
  {
    nom: 'banane',
    prix: 6,
    couleur: 'jaune',
  },
  {
    nom: 'pomme',
    prix: 9,
    couleur: 'jaune',
  },
  {
    nom: 'raisin',
    prix: 3,
    couleur: 'jaune',
  },
];

function App() {
  return (
    <div>
      <h1>
        {welcome.salut} {welcome.mot}
      </h1>
      <h2>{titre}!</h2>
      <Form />
      <ul>
        {list.map(function(item){
            return <li>{item.nom}< input type = 'checkbox'></input> </li>;
        })}
      </ul>
    </div>

  );
}

export default App;
