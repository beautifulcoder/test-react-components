import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FilterableGreatApeList from './FilterableGreatApeList';
import registerServiceWorker from './registerServiceWorker';

const APES = [
  {
    name: 'Australopithecus afarensis',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Australopithecus_afarensis.JPG',
    age: '3.9 - 2.9 Mya',
    isExtant: false
  },

  {
    name: 'Orangutan',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/be/Orang_Utan%2C_Semenggok_Forest_Reserve%2C_Sarawak%2C_Borneo%2C_Malaysia.JPG',
    age: '19 Mya - Now',
    isExtant: true
  },

  {
    name: 'Chimpanzee',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Schimpanse_Zoo_Leipzig.jpg',
    age: '1 Mya - Now',
    isExtant: true
  }
];

ReactDOM.render(<FilterableGreatApeList apes={APES} />, document.getElementById('root'));
registerServiceWorker();
