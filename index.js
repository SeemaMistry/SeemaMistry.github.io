// retrieve about me section link and tabs
var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents');

// add and remove active-link/tab from className when click event
function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove('active-link');
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove('active-tab');
  }
  event.currentTarget.classList.add('active-link');
  document.getElementById(tabname).classList.add('active-tab');
}

// set side-menu ul
var sideMenu = document.getElementById('side-menu');

function openMenu() {
  sideMenu.style.right = '0';
}

function closeMenu() {
  sideMenu.style.right = '-200px';
}
