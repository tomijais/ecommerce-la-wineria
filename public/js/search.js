window.addEventListener("load", function () {
  const $btn_search = document.querySelector(".button-buscador");
  const $lists = document.querySelectorAll(".products-search");
  const $input_searchs = document.querySelectorAll(".input-buscador");
  const buscados = document.querySelectorAll(".juancho")

  for (const $input_search of $input_searchs) {
  $input_search.addEventListener("input", function (e) {
    fetch("/admin/api")
      .then(function (response) {
        return response.json();
      })
      .then(function (info) {
        for (const buscado of buscados) {
          buscado.setAttribute('hidden', true)
          for (const $list of $lists) {
          $list.innerHTML = "";
          if (e.target.value == "") {
            buscado.setAttribute('hidden', true)
            $list.innerHTML = "";
          } else {
          buscado.removeAttribute('hidden')
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
            buscado.setAttribute('hidden', true)
          }
        }
      }
    }
      });
  })
}
});
