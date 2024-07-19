const refs = {
  form: document.querySelector('.js-location-form'),
  info: document.querySelector('.js-ip-form'),
};

//!======================================================

refs.form.addEventListener('submit', e => {
  e.preventDefault();
  const ip = e.target.elements.userip.value;

  getInfoByIp(ip)
    .then(data => {
      const markup = infoTemplate(data);
      refs.info.innerHTML = markup;
    })
    .catch(err => {
      refs.info.innerHTML = '';
    });
});

//!======================================================

function getInfoByIp(ip) {
  const BASE_URL = 'https://ip-geolocation-ipwhois-io.p.rapidapi.com';
  const END_POINT = '/json/';
  const params = new URLSearchParams({ ip });
  const url = `${BASE_URL}${END_POINT}?${params}`;

  const headers = {
    'x-rapidapi-key': '9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4',
    'x-rapidapi-host': 'ip-geolocation-ipwhois-io.p.rapidapi.com',
  };

  return fetch(url, { headers }).then(res => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error('Server Error');
    }
  });
}

//!======================================================
function infoTemplate(data) {
  const {
    country,
    ip,
    city,
    country_flag,
    currency,
    timezone,
    completed_requests,
    currency_rates,
    latitude,
    longitude,
  } = data;

  return `
    <div class="info-item">
    <img
      class="flag"
      src="${country_flag}"
      alt="Flag of ${country}"
    />
    <span class="info-label">Country:</span>
    <span class="info-value">${country}</span>
  </div>
  <div class="info-item">
    <span class="info-label">IP Address: </span>
    <span class="info-value">${ip}</span>
  </div>
  <div class="info-item">
    <span class="info-label">City: </span> <span class="info-value">${city}</span>
  </div>
  <div class="info-item">
    <span class="info-label">Timezone: </span>
    <span class="info-value">${timezone}</span>
  </div>
  <div class="info-item">
    <span class="info-label">Currency:</span>
    <span class="info-value">${currency}</span>
  </div>
  <div class="info-item">
    <span class="info-label">Currency Rate:</span>
    <span class="info-value">${currency_rates}</span>
  </div>
  <div class="info-item">
    <span class="info-label">Completed Requests:</span>
    <span class="info-value">${completed_requests}</span>
  </div>
  <div class="info-item">
    <span class="info-label">Google Maps:</span>
    <a href="https://www.google.com.ua/maps/@${latitude},${longitude},13.18z?entry=ttu"><span class="info-value">Тицяй</span></a>
  </div>`;
}

//!======================================================
