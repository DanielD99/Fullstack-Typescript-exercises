export function createInputWithButton(
  nameInput: HTMLInputElement,
  submitButton: HTMLButtonElement
): void {
  submitButton.addEventListener('click', () => {
    const inputName = nameInput.value;
    alert(`Hello, ${inputName}!`);
  });
}