let qs = (element) => document.querySelector(element);
let qsa = (element) => document.querySelectorAll(element);

window.addEventListener("load", function () {
  let forms = qsa('.juan');
  let inputImagen = qs('#imagen')
  let campoImg = qs('#img')

  
  inputImagen.addEventListener("click", (e) => {
      e.preventDefault();
      let urlImagen = inputImagen.value
      campoImg.setAttribute('src', urlImagen)  
      
      location.reload();
      
  })

  
});
