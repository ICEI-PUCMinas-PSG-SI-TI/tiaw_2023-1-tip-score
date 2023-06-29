function verificarUsuarioAtual() {
    var isNewUser = localStorage.getItem('isNewUser');
    var currentUser = localStorage.getItem('currentUser');
    
    if (currentUser) {
      // Resto do código...
  
      // Ocultar botões de login e registro
      var btnLogin = document.getElementById('btn-Login');
      var btnRegistro = document.getElementById('btn-Register');
  
      btnLogin.style.display = 'none';
      btnRegistro.style.display = 'none';
  
      if (isNewUser) {
        // Remover foto de perfil do Local Storage
        localStorage.removeItem('profileImage');
        localStorage.removeItem('userAddress');
  
        // Remover flag de novo usuário
        localStorage.removeItem('isNewUser');
  
        // Redefinir a foto de perfil para uma imagem padrão
        fotoPerfil.style.backgroundImage = 'url(caminho_da_imagem_padrao)';
      }
  
      var perfilUsuario = document.getElementById('perfil-usuario');
      perfilUsuario.style.display = 'flex';
  
      var fotoUsuario = document.getElementById('foto-usuario');
      var storedImageUrl = localStorage.getItem('profileImage');
      
      if (storedImageUrl) {
        fotoUsuario.src = storedImageUrl;
      } else {
        fotoUsuario.src = ''; // Remover a foto do ícone
      }

      var btnDesconectar = document.getElementById('btnDesconectar');

btnDesconectar.addEventListener('click', function() {
  // Limpar dados do usuário no localStorage
  localStorage.removeItem('currentUser');
  localStorage.removeItem('profileImage');
  localStorage.removeItem('userAddress');

  // Atualizar a interface do usuário
  var btnLogin = document.getElementById('btn-Login');
  var btnRegistro = document.getElementById('btn-Register');

  btnLogin.style.display = 'block';
  btnRegistro.style.display = 'block';

  var perfilUsuario = document.getElementById('perfil-usuario');
  perfilUsuario.style.display = 'none';

  // Outras atualizações que você desejar fazer na interface do usuário

});

  
      perfilUsuario.appendChild(fotoUsuario);
      perfilUsuario.appendChild(btnDeslogar);
  
      var endereco = document.getElementById('endereco');
      var storedAddress = localStorage.getItem('userAddress');
  
      if (storedAddress) {
        endereco.innerText = storedAddress;
      }
    } else {
      window.location.href = 'login.html';
    }
  }
  