import { _ } from '../utilities/utilities.js'

export default class Test {
    constructor(el) {
        this.element = $(el)
        this.element.on('click', this.click)
    }

    click = (e) => {
        const target = $(e.target)
        console.log(target)
        target.css("color", "red")
    }
}
