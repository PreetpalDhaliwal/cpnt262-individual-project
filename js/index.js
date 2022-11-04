const randomInteger = function(max){
  const randomInteger = Math.floor(Math.random() * max);
  return randomInteger;
}

const fetchData = async function() {
  const response = await fetch("https://finalspaceapi.com/api/v0/character");
  const data = await response.json();

  const product = data[randomInteger(data.length)];
  const body = document.querySelector('body');
  output = `
  <article>
    <h1>${product.name}</h1>
    <img src="${product.img_url}">
    <h4>Status: ${product.status}</h4>
    <h4>Species: ${product.species}</h4>
    <h4>Hair: ${product.hair}</h4>
    <h4>Gender: ${product.gender}</h4>


  </article>
  `
  document.innerHTML = document.querySelector('.content').innerHTML = output;

}
fetchData("https://finalspaceapi.com/api/v0/character")

