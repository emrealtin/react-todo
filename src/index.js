import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import "@blueprintjs/icons/lib/css/blueprint-icons.css"
import '@blueprintjs/core/lib/css/blueprint.css'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();