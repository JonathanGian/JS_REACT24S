fetch('https://jsonplaceholder.typicode.com/users/')
      .then(response => response.json())
      .then(json => {
        json.forEach((user) => console.log(user.name));// Prints out all users names
      });

      
      fetch('https://jsonplaceholder.typicode.com/users/')
      .then(response => response.json())
      .then(json => {
        json.forEach((user) => console.log(user.address.geo.lat)); // Prints out user latitudes
      });

/*       fetch("https://randomfox.ca/floof/")
      .then(response => response.json())
      .then(json => console.log(json)) */

      const catFrame= document.querySelector("#catFrame")

      async function fetchCats() {
        try {
            const response = await fetch("https://api.thecatapi.com/v1/images/search")
            const data = await response.json()
            console.log(data[0])

            catFrame.style.width = `${data[0].width}px`;
            catFrame.style.height = `${data[0].height}px`;
            catFrame.src = `${data[0].url}`
            
            
        } catch (error) {
            console.error("Error",error)
            
        }
      }
fetchCats()