import { _ } from '../utilities/utilities.js'

export default class Dropdown {
    constructor(el) {
        this.element = $(el)
        this.dropdownMenu = _("dropdown-menu", "element").el()
        this.element.on('click', this.dropdown)
    }

    dropdown = (e) => {
        const target = $(e.target)
        console.log(target)
        target.parent().find(this.dropdownMenu).toggle()
    }
}
 