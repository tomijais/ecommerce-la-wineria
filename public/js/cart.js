let qs = (element) => document.querySelector(element);
let qsa = (element) => document.querySelectorAll(element);

window.addEventListener("load", function () {
  let forms = qsa('.juan');
  let botonesBorrar = qsa('.borrar')
  let formFinal = qs('.end')
  let inputLocalUser = qs('#locaUser')
  let agregaProdOk = qsa('.agregaOk')
  let clearCart = qs('.reClear')
  let descuento = qs('.descuento')
  let campoDescuento = qs('#descuento')
  let totalOk = qs('#totalOk')
  let campoTotal = qs('#total')
  let campoSubtotal = qs('#subtotal')
  let cupon = qs('#cupon')

  for (const form of forms) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Producto agregado!',
          showConfirmButton: false,
          timer: 1500
        })
        
        let data = {
          id_producto: form.children[0].value,
          cantidad: form.children[2].value
        }
        fetch('http://localhost:3000/cart/add',{
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        
      });
  }
  
  clearCart.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log('hola')
    let dataClear = {}
    fetch('http://localhost:3000/cart/clear',{
        method: 'POST',
        body: JSON.stringify(dataClear),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Carrito Eliminado!',
        showConfirmButton: false,
        timer: 2000
      })
      .then(function(){
      location.reload();
      })
  })

  descuento.addEventListener("submit", (e) => {
    e.preventDefault();
    if(cupon.value.toLowerCase() == 'wineria2020') {
      let primerSubtotal = Number(totalOk.value)
      let nuevoTotal = primerSubtotal - (primerSubtotal * 10 / 100)
      campoDescuento.setAttribute('value', '10 %')
      totalOk.setAttribute('value', nuevoTotal)
      campoTotal.setAttribute('value', '$ ' + totalOk.value)
      
    } else {
      campoDescuento.setAttribute('value', '0 %')
    }
    
    /*
    
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Carrito Eliminado!',
        showConfirmButton: false,
        timer: 2000
      })
      .then(function(){
      location.reload();
      })*/
  })

  for (const agregaOk of agregaProdOk) {
    agregaOk.addEventListener("submit", (e) => {
      e.preventDefault();
      let dataNueva = {
        id_producto: agregaOk.children[0].value,
        cantidad: agregaOk.children[1].value
      }
      console.log(dataNueva)
      fetch('http://localhost:3000/cart/update',{
        method: 'POST',
        body: JSON.stringify(dataNueva),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      location.reload();
    })
  }
  

  for (const botonBorrar of botonesBorrar) {
    botonBorrar.addEventListener("submit", (e) => {
      e.preventDefault();
  
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Producto Eliminado!',
          showConfirmButton: false,
          timer: 1500
        })
        .then(function(){
          botonBorrar.submit()
        })

      })
    }

    formFinal.addEventListener("submit", (e) => {
      e.preventDefault();
      
      
      if(inputLocalUser.value == 'NO') {
        Swal.fire({
          title: 'Ups!',
          text: "No ingresaste como usuario!",
          icon: 'error',
          showCloseButton: true,
          showCancelButton: true,
          focusConfirm: false,
          confirmButtonText:
          '<a href="/users/login">Ingresar!</a>',
          cancelButtonText:
          '<a href="/users/register">Registrate!</a>',
          
          
        })

      } else {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Compra Finalizada!',
          showConfirmButton: false,
          timer: 2000
        })
        .then(function(){
          formFinal.submit()
        })
      } 
        
      });

});
