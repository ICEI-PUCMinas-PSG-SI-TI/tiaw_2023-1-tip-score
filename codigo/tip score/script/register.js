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

   //  objeto com os dados do formulário
   const formData = {
     user,
     email,
     password,
     celular
   };

   // Salvar os dados do formulário no armazenamento local
   localStorage.setItem('formData', JSON.stringify(formData));

   //Limpa as entradas do formulário
   form.reset();

   // Mensagem formulário
   alert('Formulário enviado com sucesso!');
 });