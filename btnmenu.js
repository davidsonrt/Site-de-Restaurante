const $menu = document.querySelector('.menu')
const $btnMenuopen = document.querySelector('.btnMenu_open')
const $btnMenuclose = document.querySelector('.btnMenu_close')

$btnMenuopen.addEventListener('click', function(){
    $menu.classList.add('menu_open')
})
$btnMenuclose.addEventListener('click', function(){
    $menu.classList.remove('menu_open')
})