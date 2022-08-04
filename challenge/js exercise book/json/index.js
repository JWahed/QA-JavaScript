"use strict"

axios
    .get("https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json")
    .then(response => {
        const heroes = response.data;

        const paras = document.createElement("p");
        paras.innerHTML += `Squad Name: ${heroes.squadName}<br>`;
        paras.innerHTML += `Home Town: ${heroes.homeTown}<br>`;
        paras.innerHTML += `Year Formed: ${heroes.formed}<br>`;
        paras.innerHTML += `Secret base location: ${heroes.secretBase}<br>`;
        paras.innerHTML += `Active? ${heroes.active}<br>`;

        document.getElementById("results").appendChild(paras);


        let table = document.createElement("table"), row, col1, col2;

        for (let i = 0; i < heroes.members.length; i++) {
            
            let member = heroes.members[i];
            
            for (let k in member) {
                
                row = table.insertRow();
                col1 = row.insertCell();
                col2 = row.insertCell();

                col1.innerHTML = k;

                if (k == "powers") {
                    col2.innerHTML = member[k].join(", ");
                } else {
                    col2.innerHTML = member[k]
                }
            }
        }
        document.getElementById("results").appendChild(table);

    })
    .catch(err => console.error(err));