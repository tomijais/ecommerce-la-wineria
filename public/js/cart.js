window.addEventListener("load", function () {
  let forms = document.querySelectorAll(".juan");
  console.log(forms)
  for(form of forms) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Producto agregado!',
          showConfirmButton: false,
          timer: 1500
        })
      
        //form.submit();
      });
  }
  
});
