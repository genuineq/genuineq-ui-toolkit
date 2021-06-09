import { _ } from '../utilities/utilities.js'

export default class Navbar {
    constructor(el) {
        this.element = $(el)
        this.toggleMenu = _("toggle-menu", "element").el()
        this.close = _("close", "element").el()
        this.element.on('click', this.openMenu)
        this.close.on('click', this.closeMenu)

    }

    openMenu = (e) => {
        this.toggleMenu.addClass("navbar-items-show")
    }

    closeMenu = (e) => {
        this.toggleMenu.removeClass("navbar-items-show")
    }
}