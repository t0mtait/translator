const axios = require('axios');


async function translate(input)
{
  const encodedParams = new URLSearchParams();
  encodedParams.set('q', input);
  encodedParams.set('target', 'is');
  encodedParams.set('source', 'en');

  const options = 
  {
    method: 'POST',
    url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'Accept-Encoding': 'application/gzip',
      'X-RapidAPI-Key': '1c4a1d048bmsh51aa5b380f1de7dp123a41jsn6f9b86f11bc7',
      'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
    },
    data: encodedParams,
  };

  try 
  {
    const response = await axios.request(options);
    console.log("translated text:\n" + response.data.data.translations[0].translatedText)
  } 
  catch (error) 
  {
    console.error(error);
  }
}


module.exports = { translate }