const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        console.table(jsonObject); 
        const towns = jsonObject['towns'];
        console.log(towns);

        for (let i = 0; i < towns.length; i++) {
            if (towns[i].name == "Fish Haven" || towns[i].name == "Preston" || towns[i].name == "Soda Springs") {
                let card = document.createElement('section');
                let h2 = document.createElement('h2');
                let motto = document.createElement('p');
                let yf = document.createElement('p');
                let cp = document.createElement('p');
                let avgrf = document.createElement('p');
                let img = document.createElement('img');

                h2.textContent = towns[i].name;
                motto.textContent = towns[i].motto;
                yf.textContent = "Year Founded: " + towns[i].yearFounded;
                cp.textContent = "Population: " + towns[i].currentPopulation;
                avgrf.textContent = "Annual Rainfall: " + towns[i].averageRainfall;

                img.setAttribute('src', 'images/'+towns[i].photo);
                img.setAttribute('alt', towns[i].name);
                console.log(img);
                card.appendChild(h2);
                card.appendChild(motto);
                card.appendChild(yf);
                card.appendChild(cp);
                card.appendChild(avgrf);
                card.appendChild(img);

                document.querySelector('div.cards').appendChild(card);
            }
        }
    });