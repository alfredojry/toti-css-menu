// 0 - Detectar quando o documento está pronto.
// 1 - Capturar o Botão
// 2 - Capturar o Menu
// 3 - Detectar um Clique no Botão
// 4 - A partir do clique, adicionar ou retirar (toggle) a classe "active" do menu.

// DOM - Document Object Model

window.addEventListener("DOMContentLoaded", function(){

    var button = document.getElementById("burger_button");
    var menu = document.getElementById("menu");

    button.addEventListener("click", function(){
        menu.classList.toggle("active");
    });
});

