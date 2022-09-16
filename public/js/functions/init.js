function init(blade)
{
    initLayout();

    window.addEventListener('resize', function(event) {
        initLayout();
    }, true);

    if(blade == 'welcome')
    {
        initWelcome();
    }


}

function initLayout()
{
    let layout = $('#page_container');

    let height = window.innerHeight;

    layout.css('height',height + 'px');
}

function initWelcome()
{
    MAIN_MENU = window.main_menu;
    let current_menu_index = MAIN_MENU.state.selected;
    let new_menu_index = 0;
    let option_id = '';

    window.onkeydown = function(event) {

        if(MAIN_MENU.state.display)
        {
            switch(event.code)
            {
                case 'ArrowUp':
                {
                    new_menu_index = current_menu_index - 1;
                    if(new_menu_index < 0)
                    {
                        new_menu_index = 0;
                    }

                    option_id = MAIN_MENU.state.items[new_menu_index].id;
                    MAIN_MENU.setCursorPosition(option_id);

                    break;
                }
                case 'ArrowDown':
                {
                    new_menu_index = current_menu_index + 1;
                    if(new_menu_index >= MAIN_MENU.state.items.length)
                    {
                        new_menu_index = MAIN_MENU.state.items.length - 1;
                    }

                    option_id = MAIN_MENU.state.items[new_menu_index].id;
                    MAIN_MENU.setCursorPosition(option_id);

                    break;
                }
                case 'Enter':
                {
                    MAIN_MENU.selectMenuItem(new_menu_index);
                    break;
                }
            }
        }

    };
}
