const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const h2 = document.querySelector("h2");

const superEventHandler = {

  mouseEnter: function (event) {
    h2.innerHTML = "The mouse is here!";
    h2.style.color = colors[0];
  },

  mouseLeave: function (event) {
    h2.innerHTML = "The mouse is gone!";
    h2.style.color = colors[1];
  },

  windowResize: function (event) {
    h2.innerHTML = "You just resized!";
    h2.style.color = colors[2];
  },

  contextMenu: function (event) {
    h2.innerHTML = "That was a right click!";
    h2.style.color = colors[4];
  }

};

h2.addEventListener("mouseenter", superEventHandler.mouseEnter);
h2.addEventListener("mouseleave", superEventHandler.mouseLeave);
window.addEventListener("resize", superEventHandler.windowResize);
window.addEventListener("contextmenu", superEventHandler.contextMenu);