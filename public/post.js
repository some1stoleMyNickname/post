const btn = document.getElementById("post");

btn.addEventListener("click", () => {
  let stevilke = document.getElementById("stevilke").innerHTML;

  console.log("running")
  axios.post("http://localhost:5500/api/mediana/post", {
  stevilke: stevilke
  }, {headers: {"Content-Type": "application/json"} })
  .then((response) => {
  console.log(response.data);
  location.reload(); 
  })
  .catch((error) => {
  console.error(error);
  });
});
