 let fetchBtn = document.getElementById('fetchBtn');
 let fetchBtn2 = document.getElementById('fetchBtn2');
 let img1      = document.getElementById('img1')
 let firstImg      = document.getElementById('firstImg')
 let secondImg      = document.getElementById('secondImg')
 let thirdImg      = document.getElementById('thirdImg')
 let url1 = 'https://dog.ceo/api/breeds/image/random';
 let url2 = 'https://dog.ceo/api/breeds/image/random/3';
  
 fetchBtn.addEventListener('click', function(e) {
    fetch(url1)
    .then((response) => {
        return response.json()
    })
    
    .then((data) => {
        img1.src = data.message
    }); 
})

 fetchBtn2.addEventListener('click', function(e) {
    fetch(url2)
    .then((response) => {
        return response.json()
    })
    
    .then((data) => {
        firstImg.src = data.message[0]
        secondImg.src = data.message[1]
        thirdImg.src = data.message[2]
    }); 
})