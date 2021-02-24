const input=document.querySelector('#input');
const output=document.querySelector('#output');
const rupee=document.querySelector('#rupee');

/*
const url = new URL('https://api.exchangeratesapi.io/latest?base=USD&symbols=INR');
  const param = { base: 'USD', symbols: 'INR' };
  Object.keys(param).forEach((key) => {
      url.searchParams.append(key, param[key]);
  });
  url.search = new URLSearchParams(param).toString();
*/

window.addEventListener('load',()=>{
    fetch('https://api.exchangeratesapi.io/latest?base=USD&symbols=INR')
     .then((response) => response.json())
      .then((json) => {
          rupee.innerHTML = (json.rates.INR).toFixed(2);
      });

});

input.addEventListener('input',()=>{
    fetch('https://api.exchangeratesapi.io/latest?base=USD&symbols=INR')
     .then((response) => response.json())
      .then((json) => {
          output.value = (10/json.rates.INR*input.value).toFixed(2);
      });
});


output.addEventListener('input',()=>{
    fetch('https://api.exchangeratesapi.io/latest?base=USD&symbols=INR')
    .then((response) => response.json())
      .then((json) => {
          input.value = (json.rates.INR/10*output.value).toFixed(2);
      });
});
