function init(blade)
{
    initLayout();

    window.addEventListener('resize', function(event) {
        initLayout();
    }, true);

}

function initLayout()
{
    let layout = $('#page_container');

    let height = window.innerHeight;

    layout.css('height',height + 'px');
}

