const url = "https://pokeapi.co/api/v2/pokemon"

async function getData() {
    const response = await fetch(url);
    const poke = await response.json();
    return poke;
  }
  
  getData().then(poke => {
    var array = poke['results']
    for (var i = 0; i < array.length; i++) {
        var li = document.createElement("li");
        var text = document.createTextNode(array[i]["name"]);
        li.appendChild(text);
        document.getElementById("pokemons").appendChild(li);
      }
    console.log(array)
  });


