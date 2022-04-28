const btnNavbar = document.querySelector('#menu-btn');
const menu = document.querySelector('#verticalMenu');
const mainExp = document.querySelector('#main');
const menuh4A = document.querySelector('#menuH4A');
const menuh4B = document.querySelector('#menuH4B');
const menuh4C = document.querySelector('#menuH4C');
const menuh4D = document.querySelector('#menuH4D');
const menuh4E = document.querySelector('#menuH4E');

function expandir (variabl,clase){
    variabl.classList.toggle(clase)
}


btnNavbar.addEventListener("click", e => {
  console.log("se hizo click");

  expandir(menu,"main__menuExpanded");
  expandir(menu,"main__menuPequeno");
  expandir(mainExp,"mainExpanded");
  expandir(mainExp,"mainPequeno")
  expandir(menuh4A,"main__menuPequeno__item--h4");
  expandir(menuh4A,"main__menuExpanded__item--h4");
  expandir(menuh4B,"main__menuPequeno__item--h4");
  expandir(menuh4B,"main__menuExpanded__item--h4");
  expandir(menuh4C,"main__menuExpanded__item--h4");
  expandir(menuh4C,"main__menuPequeno__item--h4");
  expandir(menuh4D,"main__menuExpanded__item--h4");
  expandir(menuh4D,"main__menuPequeno__item--h4");
  expandir(menuh4E,"main__menuExpanded__item--h4");
  expandir(menuh4E,"main__menuPequeno__item--h4");
  //menu.classList.toggle("main__menuExpanded");
  //menu.classList.toggle("main__menuPequeno");
  //mainExp.classList.toggle("mainExpanded");
  //mainExp.classList.toggle("mainPequeno");
  //menuh4.classList.toggle("main__menuPequeno__item--h4");
  //menuh4.classList.toggle("main__menuExpanded__item--h4");

});


