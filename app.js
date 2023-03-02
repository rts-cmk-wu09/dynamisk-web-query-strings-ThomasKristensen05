const destinationsList = document.querySelector(".destinationsList")
const destinations = document.querySelector("destinations.json")

fetch("/data/destinations.json")
.then(response => response.json())
.then(data => {
    console.log(data)
    data.destinations.forEach(destination => {
        destinationsList.innerHTML += `
        <figure id="${destinations.id}">
            <img src="${destinations.id}>
            <div>
                <span><i class="fa-solid fa-heart"></i></span>
                <a href="/destinations.html?id=${destinations.id}">More</a>
            </div>
        </figure>
        `
    })

        // main.innerHTML = `
        
        //     <img src="${data.image}" />        
        //     <p class="destination">${data.destination}</p>        
        //     <p class="title">${data.title}</p>        
        //     <p class="subtitle">${data.subtitle}</p>        
        //     <p class="text">${data.text}</p>        
        // `

        

    })

