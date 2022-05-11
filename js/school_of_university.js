class School_of_university extends Class_Father{
    constructor(elem) {
        super(elem);
        this.cards = this.find('.choose_su_cards__card');
        this.programs = this.find('.rubric-main__right-programs');
        this.nav_up = this.find('.rubric-main__right-nav .nav .nav-up');
        this.nav_down = this.find('.rubric-main__right-nav .nav .nav-down');
        this.rubric_main__left_top = this.find('.rubric-main__left-top');

        this.state = {active_card: 0};
        this.events();
    }
    cards_remove_active(){
        this.cards.map((key, val) => {$(val).removeClass('active')});
        this.rubric_main__left_top.map((k, v) => {$(v).removeClass('active')});
    }
    card_add_active(e){
        $(e.currentTarget).addClass('active');
        let active_index = $(e.currentTarget).index();
        if($(e.currentTarget).parent().hasClass('choose_su_cards__line_two')){active_index += 4;}
        this.state.active_card = active_index;
        this.rubric_main__left_top.map((k, v) => {
            if($(v).index() === this.state.active_card){
                $(v).addClass('active');
            }});
    }
    sort_programs(){
        this.programs.map((key, val) => {
            ($(val).index() - 1) === this.state.active_card ? $(val).addClass('active') : $(val).removeClass('active');
        });
    }
    get_active_program(){
        return this.programs.map((k, v) => {
            if($(v).hasClass('active')) return v;
        });
    }
    get_cur_offset_scroll_top_of_active_programs(){
        return $(this.get_active_program()).scrollTop();
    }
    scroll_programs_up(){
        let offset = this.get_cur_offset_scroll_top_of_active_programs() - 258;
        let programs = this.get_active_program();
        // $(programs).scrollTop(offset);
        $(programs).animate({ scrollTop: offset }, 300);
    }
    scroll_programs_down(){
        let offset = this.get_cur_offset_scroll_top_of_active_programs() + 258;
        let programs = this.get_active_program();
        // $(programs).scrollTop(offset);
        $(programs).animate({ scrollTop: offset }, 300);
    }

    events(){
        this.cards.on('click', this.cards_remove_active.bind(this));
        this.cards.on('click', this.card_add_active.bind(this));
        this.cards.on('click', this.sort_programs.bind(this));
        this.nav_up.on('click', this.scroll_programs_up.bind(this));
        this.nav_down.on('click', this.scroll_programs_down.bind(this));
    };
}