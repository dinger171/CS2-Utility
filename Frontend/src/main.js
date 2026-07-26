import './style.css'
import "./app.js";
import { initApp, render } from './app.js';

document.querySelector('#app').innerHTML = `
	<div id="nades"></div>
`

// Execute the scripts AFTER the DOM has loaded
initApp();
render();