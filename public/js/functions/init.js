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
    let layout = $('#layout_container');

    let height = window.innerHeight;

    layout.css('height',height + 'px');
}

function initWelcome()
{
    let current_menu_index = window.main_menu.state.selected;
    let new_menu_index = 0;
    let option_id = '';

    window.onkeydown = function(event) {
        switch(event.code)
        {
            case 'ArrowUp':
            {
                new_menu_index = current_menu_index - 1;
                if(new_menu_index < 0)
                {
                    new_menu_index = 0;
                }

                option_id = window.main_menu.state.items[new_menu_index].id;
                window.main_menu.setCursorPosition(option_id);

                break;
            }
            case 'ArrowDown':
            {
                new_menu_index = current_menu_index + 1;
                if(new_menu_index >= window.main_menu.state.items.length)
                {
                    new_menu_index = window.main_menu.state.items.length - 1;
                }

                option_id = window.main_menu.state.items[new_menu_index].id;
                window.main_menu.setCursorPosition(option_id);

                break;
            }
            case 'Enter':
            {
                break;
            }
        }
    };
}
