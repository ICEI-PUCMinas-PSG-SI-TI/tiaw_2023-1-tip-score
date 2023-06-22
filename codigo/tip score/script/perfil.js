document.addEventListener('DOMContentLoaded', function() {
  var fotoPerfil = document.getElementById('foto-perfil');
  var perfilInput = document.getElementById('perfil');
  var storedImageUrl = localStorage.getItem('profileImage');

  if (storedImageUrl) {
    fotoPerfil.style.backgroundImage = 'url(' + storedImageUrl + ')';
  }

  fotoPerfil.addEventListener('click', function() {
    perfilInput.click();
  });

  perfilInput.addEventListener('change', function(e) {
    var file = e.target.files[0];

    if (file) {
      var reader = new FileReader();

      reader.onload = function(e) {
        fotoPerfil.style.backgroundImage = 'url(' + e.target.result + ')';
        localStorage.setItem('profileImage', e.target.result);
      };

      reader.readAsDataURL(file);
    }
  });

  var currentUser = JSON.parse(localStorage.getItem('currentUser'));

  if (currentUser) {
    document.getElementById('nome-completo').innerText = currentUser.user;
    document.getElementById('email').innerText = currentUser.email;
    document.getElementById('telefone').innerText = currentUser.celular;

    // Verificar se o usuário é novo ou não
    var isNewUser = localStorage.getItem('isNewUser');

    if (isNewUser) {
      // Remover foto de perfil do Local Storage
      localStorage.removeItem('profileImage');
      localStorage.removeItem('userAddress');

      // Remover flag de novo usuário
      localStorage.removeItem('isNewUser');

      // Redefinir a foto de perfil para uma imagem padrão
      fotoPerfil.style.backgroundImage = 'url(caminho_da_imagem_padrao)';
    }
  } else {
    window.location.href = 'login.html';
  }

  var endereco = document.getElementById('endereco');
  var storedAddress = localStorage.getItem('userAddress');

  if (storedAddress) {
    endereco.innerText = storedAddress;
  }
});

function editarEndereco() {
  var enderecoAtual = document.getElementById("endereco").innerText;
  var novoEndereco = prompt("Digite o novo endereço:", enderecoAtual);

  if (novoEndereco !== null && novoEndereco !== "") {
    document.getElementById("endereco").innerText = novoEndereco;
    localStorage.setItem('userAddress', novoEndereco);
    alert("Endereço atualizado com sucesso!");
  }
}
