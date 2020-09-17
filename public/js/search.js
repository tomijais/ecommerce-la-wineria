window.addEventListener("load", function () {
  const $btn_search = document.querySelector(".button-buscador");
  const $input_search = document.querySelector(".input-buscador");
  const $ul = document.querySelector(".products-search");

  $input_search.addEventListener("input", function (e) {
    console.log(e.target.value);
  });
});
