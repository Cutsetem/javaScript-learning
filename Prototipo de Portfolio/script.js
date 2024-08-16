const buttonTitle = document.querySelector('.btn');
const displayButton = document.querySelector('.grid-projects')

buttonTitle.addEventListener('click', showProjects);

function showProjects() {
    console.log('Botão clicado!');
    displayButton.style.display = 'flex';
    buttonTitle.style.display = 'none'
}