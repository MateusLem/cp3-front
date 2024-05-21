function slides() {
    let imagePaths = ['./src/img/fundo.jpg', './src/img/g6.jpg', './src/img/g10.jpg', './src/img/pacote3.jpg'];
    let currentIndex = 0;

    setInterval(() => {
        document.getElementById("imagensBanner").src = imagePaths[currentIndex];
        currentIndex = (currentIndex + 1) % imagePaths.length;
    }, 1500);
}
slides();


function openModal(imageAlt) {
    const modal = document.querySelector("#modal");
    modal.style.display = "block";
    
    const modalTitle = document.querySelector("#modal-title");
    const modalDescription = document.querySelector("#modal-description");
    const modalI = document.querySelector("#modal-itensi");
    const modalT = document.querySelector("#modal-itenst");
    const modalE = document.querySelector("#modal-itense");
    const modalM = document.querySelector("#modal-itensm");
    const modalS = document.querySelector("#modal-itenss");
    const modalP = document.querySelector("#modal-itensp");

    if (imageAlt === "q1") {
        modalTitle.textContent = "SUÍTE SERENATA";
        modalDescription.textContent = "R$ 250 diária";
        modalI.textContent = "CAMA CASAL";
        modalT.textContent = "VARANDA PARA CENTRO HISTÓRICO";
        modalE.textContent = "BANHEIRA";
        modalM.textContent = "TV";
        modalS.textContent = "";
        modalP.textContent = "";

    } else if (imageAlt === "q2") {
        modalTitle.textContent = "SUÍTE MASTER";
        modalDescription.textContent = "R$ 650 diária";
        modalI.textContent = "CAMA KING SIZE";
        modalT.textContent = "VARANDA PARA O MAR";
        modalE.textContent = "BANHEIRA E HIDROMASSAGEM";
        modalM.textContent = "SERVIÇO DE QUARTO";
        modalS.textContent = "TV";
        modalP.textContent = "SERVIÇO DE PRAIA";

    } else if (imageAlt === "q3") {
        modalTitle.textContent = "QUARTO MAR";
        modalDescription.textContent = "R$ 50 diária";
        modalI.textContent = "CAMA DE SOLTEIRO";
        modalT.textContent = "JANELA PARA O MAR";
        modalE.textContent = "";
        modalM.textContent = "";
        modalS.textContent = "";
        modalP.textContent = "";
    }
}

function closeModal() {
    const modal = document.querySelector("#modal");
    modal.style.display = "none";
}

let enviar = document.querySelector("#form")
enviar.addEventListener('submit', function(event){
    event.preventDefault()

    let nome = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let celular = parseInt(document.querySelector(".celular").value);

    console.log(nome, email, celular)
})