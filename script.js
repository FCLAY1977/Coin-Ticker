// Define API URL
const apiUrl = 'https://api.coindesk.com/v1/bpi/currentprice.json';

// Fetch Bitcoin prices from API
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Extract price data from API response
    const usdPrice = data.bpi.USD.rate;
    const gbpPrice = data.bpi.GBP.rate;
    const eurPrice = data.bpi.EUR.rate;

    // Display price data in HTML table
    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = `
      <tr>
        <td>USD</td>
        <td>${usdPrice}</td>
      </tr>
      <tr>
        <td>GBP</td>
        <td>${gbpPrice}</td>
      </tr>
      <tr>
        <td>EUR</td>
        <td>${eurPrice}</td>
      </tr>
    `;
  })
  .catch(error => console.error(error));

