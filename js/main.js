// let inputText = document.getElementById('inputText');
 let fetchBtn = document.getElementById('fetchBtn');
 let fetchMoreBtn = document.getElementById('fetchZooBtn');
//  let messages = document.getElementById('messages');
 let content = document.getElementById('content')
 let img1      = document.getElementById('img1')
 let firstImg      = document.getElementById('firstImg')
 let secondImg      = document.getElementById('secondImg')
 let thirdImg      = document.getElementById('thirdImg')
 let url1 = 'https://dog.ceo/api/breeds/image/random';
 let url2 = 'https://dog.ceo/api/breeds/image/random/3';
 let dogFacts = document.getElementById('dogFacts')
 
 fetchBtn.addEventListener('click', function(e) {
 
    fetch(url1)
    .then((response) => {
        console.log(response)

        return response.json()
    })
    
        .then((data) => {
            console.log(data)
            // const dogImg = data.split('"');
            // console.log(dogImg)

            // img1.src = dogImg[[3]]
            img1.src = data.message
        }); 
    })
 fetchMoreBtn.addEventListener('click', function(e) {
 
    fetch(url2)
    .then((response) => {
        console.log(response)

        return response.json()
    })
    
        .then((data) => {
                console.log(data)
            // const dogImg2 = data.split('"');

            //     console.log(dogImg2)
            //     console.log(dogImg2[5])

            firstImg.src = data.message[0]
            console.log(data.message[0])
                // console.log(firstImg.scr)
            secondImg.src = data.message[1]
            thirdImg.src = data.message[2]
        }); 
    })
        // fetchZooBtn.addEventListener('click', function(e) {
 
        //     fetch(url)
        //     .then((response) => {
        //         console.log(response)
        
        //         return response.text()
        //     })
            
        //         .then((data) => {
        //             console.log(data)
        //             const dogImgFacts = dogImg.split('\\/');
        //             console.log(dogImgFacts[[4]])
        
        //             dogFacts.innerHTML = dogImgFacts[[4]]
        //         });
                    
        //     })