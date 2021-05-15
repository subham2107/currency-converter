const input=document.querySelector('#input');
const output=document.querySelector('#output');
const rupee=document.querySelector('#rupee');


// const url = new URL('https://api.exchangeratesapi.io/latest?base=USD&symbols=INR');
//   const param = { base: 'USD', symbols: 'INR' };
//   Object.keys(param).forEach((key) => {
//       url.searchParams.append(key, param[key]);
//   });
//   url.search = new URLSearchParams(param).toString();


window.addEventListener('load',()=>{
    fetch('http://data.fixer.io/api/latest?cbase=USD&access_key=35a3ad0f2f253d37131b68cd1b5953fc')
     .then((response) => response.json())
      .then((json) => {
          rupee.innerHTML = (json.rates.INR-16).toFixed(2);
      });

});

input.addEventListener('input',()=>{
    fetch('http://data.fixer.io/api/latest?cbase=USD&access_key=35a3ad0f2f253d37131b68cd1b5953fc')
     .then((response) => response.json())
      .then((json) => {
          output.value = (10/(json.rates.INR-16)*input.value).toFixed(2);
      });
});


output.addEventListener('input',()=>{
    fetch('http://data.fixer.io/api/latest?cbase=USD&access_key=35a3ad0f2f253d37131b68cd1b5953fc')
    .then((response) => response.json())
      .then((json) => {
          input.value = ((json.rates.INR-16)/10*output.value).toFixed(2);
      });
});
