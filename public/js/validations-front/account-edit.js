window.addEventListener("load", function () {
  let form = document.querySelector(".account-edit");

  let inputPassword = document.querySelector("input[name='password']");

  let inputEmail = document.querySelector("input[name='email']");
  let inputName = document.querySelector("input[name='first_name']");
  let inputSurname = document.querySelector("input[name='last_name']");
  let inputNumber = document.querySelector("input[name='telefono']");

  let errorEmail = document.querySelector("small.validate-email");
  let errorPassword = document.querySelector("small.validate-password");
  let errorName = document.querySelector("small.validate-name");
  let errorSurname = document.querySelector("small.validate-surname");

  let errors = {};

  let regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

  inputSurname.addEventListener("blur", function () {
    if (inputSurname.value.length == 0) {
      errors.surname = "El campo no puede quedar vacio";
      errorSurname.innerText = errors.surname;
    } else if (inputSurname.value.length <= 2) {
      errorSurname.innerText = "";
      errors.surname = "El campo no puede tener menos de 3 caracteres";
      errorSurname.innerText = errors.surname;
    } else {
      if (errors.surname) {
        delete errors.surname;
      }
      errorSurname.innerText = "";
    }
  });

  inputName.addEventListener("blur", function () {
    if (inputName.value.length == 0) {
      errors.name = "El campo no puede quedar vacio";
      errorName.innerText = errors.name;
    } else if (inputName.value.length <= 2) {
      errorName.innerText = "";
      errors.name = "El campo no puede tener menos de 3 caracteres";
      errorName.innerText = errors.name;
    } else {
      if (errors.name) {
        delete errors.name;
      }
      errorName.innerText = "";
    }
  });

  inputPassword.addEventListener("blur", function () {
    if (inputPassword.value.length == 0) {
      errors.password = "El campo no puede quedar vacio";
      errorPassword.innerText = errors.password;
    } else if (inputPassword.value.length <= 2) {
      errorPassword.innerText = "";
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
      errors.mail = "El campo no puede quedar vacio";
      errorEmail.innerText = errors.mail;
    } else if (!inputEmail.value.match(regExEmail)) {
      errorEmail.innerText = "";
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

    if (inputPassword.value.length == 0) {
      errors.password = "El campo no puede quedar vacio";
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

    if (inputEmail.value.length == 0) {
      errors.mail = "El campo no puede quedar vacio";
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

    if (inputName.value.length == 0) {
      errors.name = "El campo no puede quedar vacio";
      errorName.innerText = errors.name;
    } else if (inputName.value.length <= 2) {
      errorName.innerText = "";
      errors.name = "El campo no puede tener menos de 3 caracteres";
      errorName.innerText = errors.name;
    } else {
      if (errors.name) {
        delete errors.name;
      }
      errorName.innerText = "";
    }

    if (inputSurname.value.length == 0) {
      errors.surname = "El campo no puede quedar vacio";
      errorSurname.innerText = errors.surname;
    } else if (inputSurname.value.length <= 2) {
      errorSurname.innerText = "";
      errors.surname = "El campo no puede tener menos de 3 caracteres";
      errorSurname.innerText = errors.surname;
    } else {
      if (errors.surname) {
        delete errors.surname;
      }
      errorSurname.innerText = "";
    }

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
