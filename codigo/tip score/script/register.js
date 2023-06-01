function validateForm() {
    const name = document.querySelector(".name").value;
    const email = document.querySelector(".email").value;
    const password = document.querySelector(".password").value;
    const confirmPassword = document.querySelector(".confirmpassword").value;
    const phone = document.querySelector(".phone").value;
  
    if (name.trim() === "") {
      alert("Por favor, preencha o campo Nome");
      return false;
    }
  
    if (email.trim() === "") {
      alert("Por favor, preencha o campo Email");
      return false;
    }
  
    if (password.trim() === "") {
      alert("Por favor, preencha o campo Senha");
      return false;
    }
  
    if (confirmPassword.trim() === "") {
      alert("Por favor, preencha o campo Confirmar senha");
      return false;
    }
  
    if (password !== confirmPassword) {
      alert("As senhas não correspondem");
      return false;
    }
  
    if (phone.trim() === "") {
      alert("Por favor, preencha o campo Telefone");
      return false;
    }
  
    // Armazena as informações no Local Storage
    const userData = {
      name: name,
      email: email,
      password: password,
      phone: phone
    };
  
    localStorage.setItem("userData", JSON.stringify(userData));
  
    return true;
  }
  