/*fetch('https://pokeapi.co/api/v2/ability/7/').then((response) => response.json()).then(json => {
    console.log(json);
})
*/

async function fetchPokes(url){
     const response = await fetch(url);
     const json = await response.json();
     console.log(json);
     console.log(response);
    //return response;
}

const pokes = fetchPokes('https://pokeapi.co/api/v2/ability/7/');
