const navbar = document.querySelector(".nav-bar");
const transport = document.querySelector(".mini-div");
const input = document.querySelector(".input-div");
const inputContainer = document.querySelector(".input-container");
const search = document.querySelector(".search-btn");
const getval = document.querySelector(".input-box");

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        // If the page is scrolled more than 50px, add the 'scrolled' class
        navbar.classList.add('nav-bar-scroll');
    } else {
        // Otherwise, remove the 'scrolled' class
        navbar.classList.remove('nav-bar-scroll');
    }
});

input.addEventListener('click', inputcont => {
    if (inputContainer.style.display === 'none') {
        // If hidden, show it
        inputContainer.style.display = 'flex';
        inputContainer.classList.add("input-container");
        
    } else {
        // If visible, hide it
        inputContainer.style.display = 'none';
    }
})

window.addEventListener("keydown", (event) => {
    if(event.key === 'Enter'){
        GetVlauesForCity();
    }
})

function GetVlauesForCity(){
    let val = getval.value;
        console.log(val);
        if (inputContainer.style.display !== 'none') {
            inputContainer.style.display = 'none'; 
        } 
        const city = `${val}`; 
        const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${city}`;
        
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                console.log(data.description);
                

                
            const apiKey = 'fsq3wkQSLjSZwOT1UrWuxENIK56LbiFw4GeOjjaDJ2g/YJs=';
            const loc = `${data.coordinates.lat},${data.coordinates.lon}`; // Coordinates 
            const radius = 10000; // km radius
            const url1 = `https://api.foursquare.com/v3/places/search?ll=${loc}&radius=${radius}&categories=16000&limit=15`;
            
            fetch(url1, {
              headers: {
                'Authorization': apiKey
              }
            })
              .then(response => response.json())
              .then(data => {
                
                const places = data.results;
                console.log(data.results);
                places.forEach(place => {
                  console.log(`Name: ${place.name}`);
                  console.log(`Address: ${place.location.address},${place.location.locality}`);
                  
                 
                });
              })
              .catch(error => console.error('Error fetching data:', error));



            })
            .catch(error => console.error('Error fetching the data:', error));

}

search.addEventListener("click", () =>{
    GetVlauesForCity();
})

//fsq3wkQSLjSZwOT1UrWuxENIK56LbiFw4GeOjjaDJ2g/YJs=









