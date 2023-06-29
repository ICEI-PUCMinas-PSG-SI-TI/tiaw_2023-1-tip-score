document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('login-form');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Obter os inputs do formulário
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Obter a array de cadastros do Local Storage
    let cadastros = JSON.parse(localStorage.getItem('cadastros')) || [];

    // Verificar se o email e a senha correspondem a algum cadastro
    const matchingUser = cadastros.find(
      user => user.email === email && user.password === password
    );

    if (matchingUser) {
      // Login bem-sucedido, redirecionar para a página de perfil
      // Armazenar os dados do usuário no localStorage para acessá-los na página de perfil
      localStorage.setItem('currentUser', JSON.stringify(matchingUser));
      window.location.href = 'perfil.html';
      localStorage.setItem('isNewUser', true);
    } else {
      // Login inválido, exibir mensagem de erro
      alert('Email ou senha inválidos');
    }
  });
});
