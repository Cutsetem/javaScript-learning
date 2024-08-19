const button = document.getElementById('btn');
const inputPlayer1 = document.getElementById('player1');

button.addEventListener('click', function() {
    const player1Name = inputPlayer1.value;
    
    if(player1Name.trim() !== "") {
        console.log('Jogador 1:', player1Name);
        
        const scoresSection = document.querySelector('.scores');
        scoresSection.innerHTML = `<p>Jogador 1: ${player1Name}</p>`;
        
        inputPlayer1.value = '';
    } else {
        alert("Por favor, insira o nome do jogador 1.");
    }
});
