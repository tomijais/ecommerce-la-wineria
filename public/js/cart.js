let qs = (element) => document.querySelector(element);
let qsa = (element) => document.querySelectorAll(element);

window.addEventListener("load", function () {
  let forms = qsa('.juan');
  let botonesBorrar = qsa('.borrar')
  
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
      
      
      //form.submit();
      })
    }
});
