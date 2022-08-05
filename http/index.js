"use strict"

// Post
document.querySelector("#post").addEventListener("submit", event => {
    
    event.preventDefault();

    const body = {
        name: event.target.name.value,
        age: event.target.age.value,
        habitat: event.target.habitat.value,
        gender: event.target.gender.value
    };

    axios.post("http://localhost:8080/duck/create", body)
        .then(response => {
            if (response.status !== 201) {
                alert("Problem with post");
                console.log(response.status);
            }
            event.target.reset();
            event.target.name.focus();
            
        })
        .catch(err => console.error(err));
});


// GetAll
document.querySelector("#get").addEventListener("click", (event) => {

    axios.get("http://localhost:8080/duck/readAll")
        .then(response => {
            let ducks = response.data;
            
            document.getElementById("results").innerHTML = "";
            
            for (let i = 0; i< ducks.length; i++) {
                const paras = document.createElement("p");
                paras.innerHTML += `Duck id: ${ducks[i].id}<br>`;
                paras.innerHTML += `Name: ${ducks[i].name}<br>`;
                paras.innerHTML += `Age: ${ducks[i].age}<br>`;
                paras.innerHTML += `Habitat: ${ducks[i].habitat}<br>`;
                paras.innerHTML += `Gender? ${ducks[i].gender}<br>`;
    

                document.getElementById("results").appendChild(paras);
            }
        }) 
        .catch(err => console.log(err))
})


// GetById
document.querySelector("#getById").addEventListener("submit", (event) => {

    event.preventDefault();

    const id = event.target.id.value

    axios.get("http://localhost:8080/duck/readById/" + id)
        .then(response => {
            let duck = response.data;

            const paras = document.createElement("p");
            paras.innerHTML += `Duck id: ${duck.id}<br>`;
            paras.innerHTML += `Name: ${duck.name}<br>`;
            paras.innerHTML += `Age: ${duck.age}<br>`;
            paras.innerHTML += `Habitat: ${duck.habitat}<br>`;
            paras.innerHTML += `Gender? ${duck.gender}<br>`;

            document.getElementById("results").innerHTML = "";
            document.getElementById("results").appendChild(paras);
        }) 
        .catch(err => console.log(err))

})


// Delete
document.querySelector("#delete").addEventListener("submit", event => {

    event.preventDefault();

    const id = event.target.id.value;

    axios.delete("http://localhost:8080/duck/delete/" + id)
        .then(response => {
            console.log("Successfully deleted");

        })
        .catch(err => console.error(err));
})