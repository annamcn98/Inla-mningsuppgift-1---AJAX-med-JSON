// let inputText = document.getElementById('inputText');
 let fetchBtn = document.getElementById('fetchBtn');
//  let messages = document.getElementById('messages');
 let content = document.getElementById('content')
 let img      = document.querySelector('#content img')
 let url = 'https://dog.ceo/api/breeds/image/random';
 
 fetchBtn.addEventListener('click', function(e) {
 
    fetch(url)
    .then((response) => {
        console.log(response)

        return response.text()
    })
    
        .then((data) => {
            console.log(data)
            const dogImg = data.split('"');
            console.log(dogImg)

            img.src = dogImg[[3]]
        });
            
    })