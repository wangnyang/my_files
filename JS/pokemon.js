function get_pokemon() {
    fetch('https://pokeapi.co/api/v2/pokemon/')    // fetch возвращает обещание Promise, которое возвращает Response
    .then((res) => res.json())                    // функция принимает Response, преобразовывает json -> object
    .then((data) => {                            // переменная data содержит JavaScript-объект, полученный из JSON-ответа API
        let pokemonContainer = document.getElementById('pokemonContainer');  // ссылается на элемент HTML-документа с id pokemonContainer
        for (let i=0; i < data.results.length; i++) {
            let p = document.createElement('p');
            let a = document.createElement('a');
            p.textContent = data.results[i].name;      // в элемент p вставляется информация об имени покемона
            a.textContent = data.results[i].url;
            a.href = data.results[i].url;
            pokemonContainer.appendChild(p);
            pokemonContainer.appendChild(a);    // элементы p и a добавляются в pokemonContainer
        }
    })
    .catch((err) => console.error(err));       // ловит ошибки, если они возникают
}

get_pokemon()
