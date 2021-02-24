
const input=document.querySelector('#input');
const output=document.querySelector('#output');

input.addEventListener('input',()=>{
  const url = new URL('https://api.exchangeratesapi.io/latest?base=USD&symbols=INR');
  const param = { base: 'USD', symbols: 'INR' };
  Object.keys(param).forEach((key) => {
      url.searchParams.append(key, param[key]);
  });
  url.search = new URLSearchParams(param).toString();
  fetch(url)
  .then((response) => response.json())
      .then((json) => {
          output.value = Math.round((10/json.rates.INR*input.value) * 100) / 100 ;
      });
});

