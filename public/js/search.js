window.addEventListener("load", function () {
  const $btn_search = document.querySelector(".button-buscador");
  const $list = document.querySelector(".products-search");
  const $input_search = document.querySelector(".input-buscador");

  $input_search.addEventListener("input", function (e) {
    fetch("/admin/api")
      .then(function (response) {
        return response.json();
      })
      .then(function (info) {
        $list.innerHTML = "";
        if (e.target.value == "") {
          $list.innerHTML = "";
        } else {
          info.forEach((dato) => {
            if (
              dato.name
                .toLowerCase()
                .match(new RegExp(e.target.value.toLowerCase()))
            ) {
              $list.innerHTML +=
                `<li><a href='/producto/detalle/${dato.id}'>${dato.name}<a/></li>`
            }
          });
        }
      });
  });
});
