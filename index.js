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
