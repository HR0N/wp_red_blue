class Class_Father {
    constructor(elem) {
        this.elem = $(elem);
        this.state = {};
        this.dropdown = this.find('.dropdown');
        this.dropdown_btn = this.find('.dropdown_btn');
    }
    find(selector){
        return this.elem.find(selector);
    }
}
