window.onload = () => {
    const titulo = document.getElementById("nome-titulo");
    const descricao = document.getElementById("info");
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
}