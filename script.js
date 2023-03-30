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


  
  const miningSection = document.querySelector('#mining-section');
  const miningLinks = miningSection.querySelectorAll('a');
  
  const newsSection = document.querySelector('#news-section');
  const newsLinks = newsSection.querySelectorAll('a');
  
  
  miningLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      console.log(`You clicked on the ${link.textContent} link in the mining section.`);
      
    });
  });
  
  
  newsLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      console.log(`You clicked on the ${link.textContent} link in the news section.`);
      
    });
  });

 
  function calculateCryptoValue() {
    const abbv = document.getElementById('crypto-abbv').value;
    const price = document.getElementById('crypto-price').value;
   
    if (abbv !== "BTC" && abbv !== "ETH" && abbv !== "LTC") {
      alert("Please choose a valid crypto abbreviation (BTC, ETH, or LTC).");
      return;
    }
   
    if (!price || price <= 0) {
      alert("Please enter a valid crypto price.");
      return;
    }
   
    const value = price * 10 / 2;
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>The value of ${abbv} is ${value}.</p>`;
  }