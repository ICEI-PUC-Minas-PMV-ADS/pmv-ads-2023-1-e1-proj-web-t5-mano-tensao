$(document).ready(function () {
        $.getJSON("data/prestadores.json", function (data) {
            localStorage.setItem("prestadores", JSON.stringify(data))
        });
});

let initial_json = JSON.parse(localStorage.getItem("prestadores"));
initial_json = initial_json["users"];

search_results_array = []

let card_container;

let CreateTaskCard = (search_result) => {

    let card = document.createElement("div");
    card.className = "card text-white bg-dark mb-3";

    let card_body = document.createElement("div");
    card_body.className = "card-body";

    let avatar_div = document.createElement("div");
    avatar_div.style = "float: left; border: 1px #ccc solid;width: 70px;height: 80px;position: relative; border-color: transparent;"
    let avatar_image = document.createElement("img");
    avatar_image.src = search_result.user_avatar;
    avatar_image.style = "width: 4em; height: 4em;"
    avatar_div.appendChild(avatar_image);

    let title = document.createElement("h5");
    title.innerText = search_result.user;
    title.className = "card-title";

    let description = document.createElement("div");
    description.innerHTML = search_result.description + "<br><br>";
    description.className = "card-text";

    let tags = document.createElement("div");
    tags.innerHTML = "<strong>Tags:</strong> <i>" + search_result.tags + "</i>";

    let ver_mais = document.createElement("a");
    ver_mais.href = ("#");
    ver_mais.className = "btn btn-primary float-end";
    ver_mais.innerText = "Ver mais...";
    //ver_mais.style = "margin: auto 0 auto auto; width: 120px;"

    let div_separator = document.createElement("div");
    div_separator.style = "height: 5px";

    card_body.appendChild(title);
    card_body.appendChild(avatar_div);
    card_body.appendChild(description);
    card_body.appendChild(tags);
    card_body.appendChild(ver_mais);
    card.appendChild(card_body);
    card_container.appendChild(card);
    card_container.appendChild(div_separator);
}

let initListOfTasks = () => {
    if (card_container) {
        document.getElementById("card-container").replaceWith(card_container);
        return;
    }

    card_container = document.getElementById("card-container");
    search_results_array.forEach((search_result) => {
        CreateTaskCard(search_result);
    });
};

let performSearch = (search_string) =>{
    let spit_search_terms = search_string.split(/\s+/);

      for (var i = 0; i < spit_search_terms.length; i++){
        for (var j = 0; j < initial_json.length; j++){
           let temp_description_normalized =  normalizeString(initial_json[j].description.toLowerCase());
            if (temp_description_normalized.includes(normalizeString(spit_search_terms[i].toLowerCase())))
            {
                search_results_array.push(initial_json[j]);
            }
            for (var k = 0; k < initial_json[j].tags.length; k++){
                if (normalizeString(initial_json[j].tags[k].toLowerCase()).includes(normalizeString(spit_search_terms[i].toLowerCase())))
                {
                    search_results_array.push(initial_json[j]);
                }
            }
        }
    }

    //cleanup duplicates
    let s = new Set(search_results_array);
    let it = s.values();
    search_results_array = Array.from(it);

    initListOfTasks();
}

let newSearch = () => {
    window.location.assign("search_results.html?search_value="+document.getElementById("search-bar").value);
    return false;
}

let normalizeString = (st) => {
    return st.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
}

let removeStupidWords = (str) => {
    var words = ['com', 'de', 'da', 'o', 'a', 'minha', 'sua', 'profissional'];
    for(var i=0; i < words.length; i++){
        str = str.replace(" " + words[i] + " ", "");
    }
    return str;

}

let sanitizeAndFormatSearchString = () => {

    const url_params = new URLSearchParams(window.location.search);
    var test_text = removeStupidWords(url_params.get("search_value"));
    document.getElementById("search-bar").value = url_params.get("search_value");

    performSearch(test_text);
}

sanitizeAndFormatSearchString()
