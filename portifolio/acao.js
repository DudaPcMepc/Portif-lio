  

    // Seleciona os elementos
const openPopup = document.getElementById('openPopup');
const closePopup = document.getElementById('closePopup');
const popup = document.getElementById('popup');
const confirmButton = document.getElementById('conteudo_escrevase');
const userInput = document.getElementById('userInput');
const output = document.getElementById('output');

// Função para abrir a pop-up
openPopup.addEventListener('click', () => {
  popup.style.display = 'flex';
});

// Função para fechar a pop-up
closePopup.addEventListener('click', () => {
  popup.style.display = 'none';
  userInput.value = ''; // Limpa o campo de entrada
})

// Função para confirmar a entrada do usuário
confirmButton.addEventListener('click', () => {
  const userValue = userInput.value;
  if (userValue) {
    output.textContent = `${userValue}`;
  } else {
    output.textContent = 'Por favor, insira os dados.';
  }
  popup.style.display = 'none'; // Fecha a pop-up
  userInput.value = ''; // Limpa o campo de entrada
});

// Fecha a pop-up se o usuário clicar fora dela
window.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = 'none';
    userInput.value = ''; // Limpa o campo de entrada
  }
});
