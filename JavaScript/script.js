document.getElementById('btn_inscricao').addEventListener('click', () => {
    const section = document.querySelector('.beneficios_resistro');
    section.scrollIntoView({behavior: "smooth"});
});

document.querySelector('.col_registro button').addEventListener('click', () => {
    let nomeInput = document.querySelector('.inputs input:nth-child(1)');
    let emailInput = document.querySelector('.inputs input:nth-child(2)');

    let nome = nomeInput.value;
    let email = emailInput.value;

    if(nome === "" || email === ""){
        alert('Por favor, preencha todos os campos!');
    } else {
        alert('Inscrição realizada com sucesso!');
    }

    nomeInput.value = "";
    emailInput.value = "";
});
