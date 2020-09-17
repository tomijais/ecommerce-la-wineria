window.addEventListener("load", function () {
  let formProd = qs('.form-carga')

  let inputName = qs("input[name='name']")
  let inputYear = qs("input[name='year']")
  let inputBodega = qs("input[name='bodega']")
  let inputPrice = qs("input[name='price']")
  let inputDescription = qs("input[name='description']")

  let errorName = qs("small.validation-name")
  let errorYear = qs("small.validation-year")
  let errorBodega = qs("small.validation-bodega")
  let errorPrice = qs("small.validation-price")
  let errorDescription = qs("small.validation-description")

  let errors = {}

  function validationName(){
    if(inputName.value.length == 0){
      errors.name = "El campo no puede quedar vacio"
      errorName.innerText = errors.name
    }else if(inputName.value.length <= 2){
      errorName.innerText = ''
      errors.name = "El campo no puede tener menos de 3 caracteres"
      errorName.innerText = errors.name
    }else{
      if(errors.name){
        delete errors.name
      }
      errorName.innerText = ''
    }
  }

  function validationYear(){
    if(inputYear.value.length == 0){
      errors.year = "El campo no puede quedar vacio"
      errorYear.innerText = errors.year
    }else if(inputYear.value.length < 4){
      errorYear.innerText = ''
      errors.year = "El campo no puede tener menos de 4 caracteres"
      errorYear.innerText = errors.year
    }else{
      if(errors.year){
        delete errors.year
      }
      errorYear.innerText = ''
    }
  }

  function validationBodega(){
    if(inputBodega.value.length == 0){
      errors.bodega = "El campo no puede quedar vacio"
      errorBodega.innerText = errors.bodega
    }else if(inputBodega.value.length <= 2){
      errorBodega.innerText = ''
      errors.bodega = "El campo no puede tener menos de 3 caracteres"
      errorBodega.innerText = errors.bodega
    }else{
      if(errors.bodega){
        delete errors.bodega
      }
      errorBodega.innerText = ''
    }
  }
  
  function validationPrice(){
    if(inputPrice.value.length == 0){
      errors.price = "El campo no puede quedar vacio"
      errorPrice.innerText = errors.price
    }else{
      if(errors.price){
        delete errors.price
      }
      errorPrice.innerText = ''
    }
  }
  
  function validationDescription(){
    if(inputDescription.value.length == 0){ 
      errors.description = "El campo no puede quedar vacio"
      errorDescription.innerText = errors.description
    }else{
      if(errors.description){
        delete errors.description
      }
      errorDescription.innerText = ''
    }
  }

  inputName.addEventListener("blur", function () {
    validationName()
  })

  inputYear.addEventListener("blur", function () {
    validationYear()
  })

  inputBodega.addEventListener("blur", function () {
    validationBodega()
  })

  inputPrice.addEventListener("blur", function () {
    validationPrice()
  })
  
  inputDescription.addEventListener("blur", function () {
    validationDescription()
  })

  formProd.addEventListener("submit", function (e) {
    e.preventDefault()

    validationName()
    validationYear()
    validationBodega()
    validationPrice()
    validationDescription()

    if (Object.keys(errors).length) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Por favor revisa los campos e intentalo nuevamente",
      });
    } else {
      formProd.submit();
    }
  })
  
})
