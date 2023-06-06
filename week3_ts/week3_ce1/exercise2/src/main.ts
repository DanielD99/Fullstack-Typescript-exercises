import './style.css'
import { createInputWithButton } from './greetOnClick'

const container = document.querySelector<HTMLDivElement>('#app')!;
container.innerHTML = `
<div>
<p class="greet">
  HEY PLEASE INSERT YOUR NAME IN THE FIELD BELOW
</p>
<input id="nameInput" type="text" placeholder="Enter your name" />
<button id="submitButton" type="button">Submit</button>
</div>
`;

const nameInput = document.querySelector<HTMLInputElement>('#nameInput')!;
const submitButton = document.querySelector<HTMLButtonElement>('#submitButton')!;

createInputWithButton(nameInput, submitButton);