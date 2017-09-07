import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FilterableGreatApeList from './FilterableGreatApeList';
import registerServiceWorker from './registerServiceWorker';

const APES = [];

ReactDOM.render(<FilterableGreatApeList apes={APES} />, document.getElementById('root'));
registerServiceWorker();
