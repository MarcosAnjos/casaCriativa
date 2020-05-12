
function onOff(){
    document
        .querySelector('#modal')
        .classList
        .toggle('hide') // add e remomendo a classe

    document
        .querySelector('body')
        .classList
        .toggle('hideScroll')

    document
        .querySelector('#modal')
        .classList
        .toggle('addScroll')

}
