$(document).ready(function () {
        $.getJSON("../data/cliente.json", function (data) {
            localStorage.setItem("cliente", JSON.stringify(data))
        });
});;

let initial_json = JSON.parse(localStorage.getItem("cliente"));
//need to implement loop to select the customer related to the currently logged user.
full_json = initial_json;
initial_json = initial_json["customers"][0]["past_contracts"];
user_details = full_json["customers"][0];
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
   contents.innerHTML = "<h3>Sua reputação:</h3><p>" + detalhes.reputation + "</p>";

   let contents2 = document.createElement("div");
   contents2.innerHTML = "<p>Com base em " + detalhes.past_contracts.length + "contratos executados até o momento.</p>";

   let contents3 = document.createElement("div");
   contents3.innerHTML = "<h4>Resumo dos dados do seu usuário:</h4><p>Nome: " + detalhes.name+ "</p><p>Endereço: " + detalhes.Logradouro+ ", " + detalhes.Numero+ "</p><p>" + detalhes.Bairro + ", " + detalhes.Cidade + ".</p><p> Telefone: " +  detalhes.Telefone + "</p.>";

   let contents4 = document.createElement("div");
   contents4.innerHTML = "<p><a href='perfil.html'>Clique aqui para mais detalhes ou editar seu perfil.</a>";

   details_div.appendChild(contents);
   details_div.appendChild(contents2);
   details_div.appendChild(contents3);
   details_div.appendChild(contents4);

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
populateDetalhes(user_details);

