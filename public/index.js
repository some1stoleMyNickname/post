//let stevilkeglobal = []


const nakljucneStevilke = (min, max, times) => {
  const nakljucno = []

  for (let i = 0; i < times; i++) {
      nakljucno.push(Math.floor(Math.random() * (1000 - 1) + 1));
  }
  return nakljucno;
};

window.onload = function() {
  zgeneriraj();
};

document.getElementById("gumb1").onclick = function(){
  zgeneriraj();
};

function zgeneriraj() {
  const stevilke = nakljucneStevilke(1, 1000, 5);
  const vseStevilke = document.getElementById("stevilke");
  vseStevilke.innerHTML = stevilke.join(", ");
};

document.getElementById("gumb2").onclick = function(){
  izbris();
};

function izbris() {
  const vsaSt = document.getElementById("stevilke");
  const prikSt = vsaSt.innerHTML;
  const stevilke = prikSt.split(", ").map(Number);

//random določi število
const rIzbris = Math.floor(Math.random() * stevilke.length);
stevilke.splice(rIzbris, 1);

vsaSt.innerHTML = stevilke.join(", ");
};


document.getElementById("gumb4").onclick = function(){
  eno_st();
}

function eno_st() {
  const vseStevilke = document.getElementById("stevilke");
  const pStevila = vseStevilke.innerHTML;
  const stevilke = nakljucneStevilke(1, 1000, 1);
  const novaStevila = stevilke.join(", ");
  if (pStevila) {
    const tStevila = pStevila.split(", ").lenght;


    vseStevilke.innerHTML = pStevila + ", " + novaStevila;
  } else {
    vseStevilke.innerHTML = novaStevila;
  }
};

document.getElementById("gumb3").onclick = function(){
  izbrisV();
};

//yay
//izbris vseh
function izbrisV() {
  const abc = document.getElementById("stevilke");
  abc.innerHTML = [];
};

//dodaj število
document.getElementById("gumb5").onclick = function(){
  const vns_st = prompt("Vnesi število");
  const stevilka = Number(vns_st);
  if (isNaN(stevilka)) {
    alert("Niste vnesli številke");
    return;
  }
  if (stevilka < 1 ){
    alert("Številka je manjša od 1");
    return;
  }
  if (stevilka > 1000){
    alert("Število je večje od 1000");
    return;
    }

    const elt = document.getElementById("stevilke");
    if (elt.innerHTML){
      const stevilke = elt.innerHTML.split(", ").map(Number);
      stevilke.push(stevilka);
      elt.innerHTML = stevilke.join(", ");
    }
    else {
      elt.innerHTML = stevilka;
    }

};
/*
// AXIOS GLOBALS
axios.defaults.headers.common['X-Auth-Token'] =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

// POST REQUEST
function nMediana() {
  axios
    .post("http://localhost:3000/api/mediana/post", {
      title: "Nova Mediana",
      completed: false
    })
    .then(res => showOutput(res))
    .catch(err => console.error(err));
}

document.getElementById("post").addEventListener("click", nMediana);


*/