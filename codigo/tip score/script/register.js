 // Obter o elemento de formulário
 const form = document.getElementById('signup-form');

 // Listen for form submission
 form.addEventListener('submit', function (event) {
   event.preventDefault(); // Prevent the form from submitting

   // Get the form inputs
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

   // Mensagem formuçário
   alert('Formulário enviado com sucesso!');
 });