window.onload = () => {
    const titulo = document.getElementById("nome-titulo");
    const descricao = document.getElementById("info");
    const jogos = {LG: "logicgirl.html", LK: "logikingdom.html"};

    AjusteItens();
    window.addEventListener("resize", AjusteItens);

    function AjusteItens() {
        let largura = window.innerWidth;
        console.log(largura)
        if (largura < 550) {
            titulo.style.fontSize = "50px";
            descricao.style.width = "90% !important";
        } else {
            titulo.style.fontSize = "80px";
            descricao.style.width = "50% !important";
        }
    }

    document.querySelectorAll(".projeto-arte").forEach(p => {
        p.addEventListener("click", () => {
            let game = jogos[p.getAttribute("game")];
            if(game) window.location.href = "/jogos/"+game;
        })
    })
}