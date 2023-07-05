// Obter o elemento do formulário
const form = document.getElementById('signup-form');

form.addEventListener('submit', function (event) {
  event.preventDefault(); 

  // Obter os inputs do formulário
  const user = document.getElementById('user').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.querySelector('.confirm-password').value;
  const celular = document.getElementById('celular').value;
 

  // Validação
  if (password !== confirmPassword) {
    alert('As senhas não coincidem');
    return;
  }

  // Obter a array de cadastros do Local Storage
  let cadastros = JSON.parse(localStorage.getItem('cadastros')) || [];

  // Objeto com os dados do formulário
  const formData = {
    user,
    email,
    password,
    celular,
    favoritos: [""],
  };

  // Adicionar o objeto à array de cadastros
  cadastros.push(formData);

  // Salvar a array de cadastros atualizada no Local Storage
  localStorage.setItem('cadastros', JSON.stringify(cadastros));

  // Limpar as entradas do formulário
  form.reset();

  // Mensagem de sucesso
  alert('Formulário enviado com sucesso!');
});
