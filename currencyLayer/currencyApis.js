

const axios = require("axios");

const convertPriceToRequiredCurrency =  (from, to, amount) =>{
 return new Promise((resolve,reject)=>{

  const options = {
    method: 'GET',
    url: `https://api.apilayer.com/currency_data/convert?to=${to}&from=${from}&amount=${amount}`,
    headers: {
      'apikey': process.env.CURRENCY_API_KEY,
    }
  };
  
    axios.request(options).then(function (response) {
      resolve(response.data.result)
    }).catch(function (error) {
      resolve(amount)
    });
 })
}


module.exports = {
  convertPriceToRequiredCurrency,
};
