const refs = {
  formEl: document.querySelector('.js-binance-form'),
  infoEl: document.querySelector('.js-binance-info'),
};
let userSymbol;

//!======================================================

refs.formEl.addEventListener('submit', e => {
  e.preventDefault();

  const userValue = e.target.elements.query.value;

  getPrice(userValue).then(data => {
    const markup = symbolTemplate(data);
    refs.infoEl.innerHTML = markup;
  });
});
//!======================================================

function symbolTemplate(obj) {
  const icon = obj.symbol.replace('USDT', '').toLowerCase();
  console.log(icon);
  return `
  <img
      class="coin-logo"
      src="https://assets.coincap.io/assets/icons/${icon}@2x.png"
    />
  <span class="coin-title">${obj.symbol}</span>
  <span class="coin-price">${obj.price}</span>`;
}

//!======================================================

function getPrice(x1) {
  const BASE_URL = 'https://binance43.p.rapidapi.com';
  const END_POINT = '/ticker/price';
  const params = new URLSearchParams({
    symbol: x1,
  });
  const url = `${BASE_URL}${END_POINT}?${params}`;

  const headers = {
    'x-rapidapi-key': '9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4',
    'x-rapidapi-host': 'binance43.p.rapidapi.com',
  };

  return fetch(url, { headers }).then(res => res.json());
}

//!======================================================
/* 
`
  <img
      class="coin-logo"
      src="https://assets.coincap.io/assets/icons/${icon}@2x.png"
    />
  <span class="coin-title">${obj.symbol}</span>
  <span class="coin-price">${obj.price}</span>`
*/
