window.onload = function() {
    pStevila();
};
function pStevila() {
    
console.log('Running')
axios.get("http://localhost:5500/api/mediana/get")
    .then(function(response) {
    const stevila = response.data;
    const stevilaB = document.getElementById("stevilaB");

    // API result je [ 2, 5, 324 ]
    stevila.forEach(function(stevilo) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    const stev = document.createTextNode(stevilo);

    cell.appendChild(stev);
    row.appendChild(cell);
    stevilaB.appendChild(row);
    });
    })
    .catch(function(error) {
    console.error(error);
    });
  }
  pStevila()