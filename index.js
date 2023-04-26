let request_dog_api = () => {
    let ourRequest = new XMLHttpRequest();
    ourRequest.open('GET',
'https://dog.ceo/api/breeds/image/random')
    ourRequest.onload = () => {
      document.querySelector('img').src=
     JSON.parse(ourRequest.responseText).message
    }
    // 發送HTTP請求
    ourRequest.send()
}