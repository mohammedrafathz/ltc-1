const inputElem = document.getElementById('inputElem');
const btnSubmit = document.getElementById('btnSubmit');
const para = document.getElementById('para');

inputElem.oninput = () => {
  para.innerHTML = inputElem.value;
}