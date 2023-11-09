const options = {
    method: "GET", 
    headers: {
        Accept: "application/json", 
    },
};

document.getElementById("createJoke").addEventListener("click", generateJoke);

function generateJoke() {
fetch("https://icanhazdadjoke.com/", options)
    .then((response) => response.json())
    .then((responseAsJson) => {
    document.getElementById("display").textContent = responseAsJson.joke;
    })
    .catch((error) => {
    console.error("Error:", error);
    });
}