function verificarUsuarioAtual() {
  var currentUser = localStorage.getItem('currentUser');

  // Verificar se há um usuário atual
  if (currentUser) {
    // Resto do código...

    // Ocultar botões de login e registro
    var btnLogin = document.getElementById('btn-Login');
    var btnRegistro = document.getElementById('btn-Register');

    btnLogin.style.display = 'none';
    btnRegistro.style.display = 'none';

    var perfilUsuario = document.getElementById('perfil-usuario');
    perfilUsuario.style.display = 'flex';

    var fotoUsuario = document.getElementById('foto-usuario');
    var storedImageUrl = localStorage.getItem('profileImage');

    if (storedImageUrl) {
      fotoUsuario.src = storedImageUrl;
      fotoUsuario.style.display = 'inline'; // Exibir a foto de perfil
    } else {
      fotoUsuario.style.display = 'none'; // Ocultar a foto de perfil
    }

    var btnDesconectar = document.getElementById('btnDesconectar');
    btnDesconectar.style.display = 'block'; // Exibir o botão de desconectar

    btnDesconectar.addEventListener('click', function () {
      // Limpar dados do usuário no localStorage
      localStorage.removeItem('currentUser');
      localStorage.removeItem('profileImage');
      localStorage.removeItem('userAddress');

      // Atualizar a interface do usuário
      btnLogin.style.display = 'block';
      btnRegistro.style.display = 'block';
      perfilUsuario.style.display = 'none';
      fotoUsuario.style.display = 'none'; // Ocultar a foto de perfil

      // Outras atualizações que você desejar fazer na interface do usuário
    });

    perfilUsuario.appendChild(fotoUsuario);
    perfilUsuario.appendChild(btnDesconectar);

    var endereco = document.getElementById('endereco');
    var storedAddress = localStorage.getItem('userAddress');

    if (storedAddress) {
      endereco.innerText = storedAddress;
    }
  } else {
    // Não há usuário logado, ocultar botão de desconectar e ícone da foto de perfil
    var btnDesconectar = document.getElementById('btnDesconectar');
    btnDesconectar.style.display = 'none';

    var fotoUsuario = document.getElementById('foto-usuario');
    fotoUsuario.style.display = 'none';
  }
}

