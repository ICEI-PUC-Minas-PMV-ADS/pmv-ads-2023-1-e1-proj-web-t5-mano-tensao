$(document).ready(function () {
        $.getJSON("../data/cliente.json", function (data) {
            localStorage.setItem("cliente", JSON.stringify(data))
        });
});;

let initial_json = JSON.parse(localStorage.getItem("cliente"));
//need to implement loop to select the customer related to the currently logged user.
initial_json = initial_json["customers"][0]["past_contracts"];
console.log(initial_json);

let card_container;
let details_div = document.getElementById("detalhes");

let CreatePastCard = (feed) => {

    let card = document.createElement("div");
    card.className = "card text-white bg-dark mb-3";

    let card_body = document.createElement("div");
    card_body.className = "card-body";

    let title = document.createElement("h5");
    title.innerText = "Prestador: " + feed.prestador;
    title.className = "card-title";

    let description = document.createElement("div");
    description.innerHTML = "Descrição: " + feed.description + "<br><br>";
    description.className = "card-text";

    let contract_number = document.createElement("div");
    contract_number.innerHTML = "Número de contrato: " + feed.contract_number + "<br><br>";
    contract_number.className = "card-text";

    let tags = document.createElement("div");
    tags.innerHTML = "<strong>Qualificação:</strong> <i> " + feed.qualificacao + "</i>";

    let div_separator = document.createElement("div");
    div_separator.style = "height: 5px";

    card_body.appendChild(title);
    card_body.appendChild(description);
    card_body.appendChild(contract_number);
    card_body.appendChild(tags);
    card.appendChild(card_body);
    card_container.appendChild(card);
    card_container.appendChild(div_separator);
}

let populateDetalhes = (detalhes) => {
   let contents = document.createElement("div");
   contents.innerHTML = "<h2>BLA!</h2>";

   details_div.appendChild(contents);

}

let initListOfPastContracts = () => {
    if (card_container) {
        document.getElementById("card-container").replaceWith(card_container);
    }
    if (details_div) {
        document.getElementById("detalhes").replaceWith(details_div);
    }

    card_container = document.getElementById("card-container");
    initial_json.forEach((initial_json) => {
        CreatePastCard(initial_json);
    });
};

initListOfPastContracts();
populateDetalhes();

