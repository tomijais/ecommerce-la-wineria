window.addEventListener("load", function () {
  const $btn_search = document.querySelector(".button-buscador");
  const $list = document.querySelector(".products-search");
  const $input_search = document.querySelector(".input-buscador");
  const buscados = document.querySelector(".juancho")

  $input_search.addEventListener("input", function (e) {
    fetch("/admin/api")
      .then(function (response) {
        return response.json();
      })
      .then(function (info) {
        buscados.setAttribute('hidden', true)
        $list.innerHTML = "";
        if (e.target.value == "") {
          buscados.setAttribute('hidden', true)
          $list.innerHTML = "";
        } else {
          buscados.removeAttribute('hidden')
          info.forEach((dato) => {
            if (
              dato.name
                .toLowerCase()
                .match(new RegExp(e.target.value.toLowerCase()))
            ) {
              $list.innerHTML +=
                `<li style="margin: 0px;"><a class="encontrados" href='/producto/detalle/${dato.id}'>${dato.name}<a/></li>`
            } 
          })
          
          if($list.children.length == 0){
            buscados.setAttribute('hidden', true)
          }
        }
      });
  });
});
