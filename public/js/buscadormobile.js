window.addEventListener("load", function () {
  const dropdown = qs(".menu-mobile")
  const button = qs(".button-menu")
  const span1 = qs(".span1")
  const span2 = qs(".span2")
  const span3 = qs(".span3")

  function buttonChange(){
    span1.classList.add("first-line")
    span2.classList.add("second-line")
    span3.classList.add("third-line")
    dropdown.classList.add("menu-mobile-visible")
  }
  
  button.addEventListener("click", function() {
    buttonChange()

    button.addEventListener("click", function() {
      if(dropdown.classList.contains("menu-mobile-visible")){
        dropdown.classList.remove("menu-mobile-visible")
        span1.classList.remove("first-line")
        span2.classList.remove("second-line")
        span3.classList.remove("third-line")
      } else {
        buttonChange()
      }
    })

  })
  
})