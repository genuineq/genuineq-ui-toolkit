class Selector {
    constructor(selector, attribute = 'behaviour') {
        this.main = thunk => thunk(attribute, selector)
    }
    str = () => this.main((attribute, selector) => `[data-${attribute}="${selector}"]`)
    el = () => $(this.str())
    node = () => this.el()[0]
}

export const _ = (selector, attribute = 'behaviour') => {
    return new Selector(selector, attribute)
}
