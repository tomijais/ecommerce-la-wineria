window.addEventListener("load", function () {
  let form = document.querySelector(".login-form");
  let inputPassword = document.querySelector("input[name='password']");
  let inputEmail = document.querySelector("input[name='email']");

  let errorEmail = document.querySelector("small.validate-email");
  let errorPassword = document.querySelector("small.validate-password");

  console.log(inputPassword, inputEmail, form);

  let errors = {
    password: "El campo no puede quedar vacio",
    mail: "El campo no puede quedar vacio",
  };

  let regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

  inputPassword.addEventListener("blur", function () {
    if (inputPassword.value.length == 0) {
      errorPassword.innerText = errors.password;
    } else if (inputPassword.value.length <= 2) {
      errors.password = "El campo no puede tener menos de 3 caracteres";
      errorPassword.innerText = errors.password;
    } else {
      if (errors.password) {
        delete errors.password;
      }
      errorPassword.innerText = "";
    }
  });

  inputEmail.addEventListener("blur", function () {
    if (inputEmail.value.length == 0) {
      errorEmail.innerText = errors.mail;
    } else if (!inputEmail.value.match(regExEmail)) {
      errors.mail = "Por favor ingrese un email valido";
      errorEmail.innerText = errors.mail;
    } else {
      if (errors.mail) {
        delete errors.mail;
      }
      errorEmail.innerText = "";
    }
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (Object.keys(errors).length) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Por favor revisa los campos e intentalo nuevamente",
      });
    } else {
      form.submit();
    }
  });
});
