function validarFormulario() {

    var email = document.getElementById("email").value;
    

    boasvindas.innerHTML = ""

    if (email === "" ) {
      mensagemErro.innerHTML = "Por favor, preencha todos os campos.";
      return false;
    }else if (!email.endsWith(".com")) {
      mensagemErro.innerHTML = "Email Invalido";
      return false;
    }else{
        boasvindas.innerHTML = "Email Cadastrado!";
    }
    
  }