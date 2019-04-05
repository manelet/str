function $ (el, all) {
  return !all ? document.querySelector(el) : document.querySelectorAll(el)
}

var iconMenuClosed = '<svg enable-background="new 0 0 32 32" height="32px" id="Слой_1" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Menu_1_"><path d="M1,10h30c0.552,0,1-0.448,1-1c0-0.552-0.448-1-1-1H1C0.448,8,0,8.448,0,9C0,9.552,0.448,10,1,10z" fill="#121313"/><path d="M31,15H1c-0.552,0-1,0.448-1,1c0,0.552,0.448,1,1,1h30c0.552,0,1-0.448,1-1C32,15.448,31.552,15,31,15z" fill="#121313"/><path d="M31,22H11c-0.552,0-1,0.448-1,1s0.448,1,1,1h20c0.552,0,1-0.448,1-1S31.552,22,31,22z" fill="#121313"/></g><g/><g/><g/><g/><g/><g/></svg>'
var iconMenuOpened = '<svg enable-background="new 0 0 100 100" id="Layer_1" version="1.1" viewBox="0 0 100 100" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><polygon fill="#010101" points="77.6,21.1 49.6,49.2 21.5,21.1 19.6,23 47.6,51.1 19.6,79.2 21.5,81.1 49.6,53 77.6,81.1 79.6,79.2   51.5,51.1 79.6,23 "/></svg>'

var App = function () {
  this.state = {
    menuOpened: false
  }

  this.loadUI()

  window.onresize = this.onResize.bind(this)
}

App.prototype.loadUI = function () {
  this.ui = {
    nav: $('nav'),
    burger: $('.burger'),
    body: $('body')
  }

  this.ui.burger.innerHTML = iconMenuClosed
  this.ui.burger.addEventListener('click', this.toggleMenu.bind(this))
}

App.prototype.onResize = function (e) {
  if (window.innerWidth >= 768 && this.state.menuOpened) {
    this.toggleMenu()
  }
}

App.prototype.setState = function (state, cb) {
  this.state = Object.assign({}, this.state, state)

  if (cb) {
    cb(this.state)
  }
}

App.prototype.toggleMenu = function (e) {
  var t = this
  this.setState({ menuOpened: !this.state.menuOpened }, function (state) {
    var icon = state.menuOpened ? iconMenuOpened : iconMenuClosed
    t.ui.body.classList.toggle('menu-opened')
    t.ui.nav.classList.toggle('visible')
    t.ui.nav.style.top = window.pageYOffset + 'px'
    t.ui.burger.innerHTML = icon
  })
}

var app = new App()
