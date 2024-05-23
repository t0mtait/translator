document.getElementById('btn').addEventListener('click', translate)


async function translate() 
{
  const encodedParams = new URLSearchParams();
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  const input = document.getElementById("input").value;
  console.log('translating: ' , input)
  encodedParams.set('q', input);
  encodedParams.set('source', from);
  encodedParams.set('target', to);

  const options = {
    method: 'POST',
    url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': '1c4a1d048bmsh51aa5b380f1de7dp123a41jsn6f9b86f11bc7',
      'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
    },
    data: encodedParams,
  };

  try {
    const response = await axios.request(options);
    const translatedText =  response.data.data.translations[0].translatedText
    console.log("translated text:\n" + translatedText);
    document.getElementById("output").textContent = decode(translatedText);
  } catch (error) {
    console.error(error);
    document.getElementById("output").textContent = "Error: " + error;
  }
}

function decode(text) {
  const textArea = document.createElement('textarea');
  textArea.innerHTML = text;
  return textArea.value;
}
