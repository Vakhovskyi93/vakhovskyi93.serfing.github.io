
let b = document.querySelectorAll('a');
let hide_icon = document.getElementById('nav');
let hide_bar = document.querySelectorAll('.hide_nav');

 console.log(hide_icon)
 
// hide_icon.onclick = function() {

//    if( !hide_bar==false) {
//     console.log(!hide_bar)
//         for( i = 0; i < hide_bar.length; i++ ){
//             hide_bar[i].classList.add('display_none')
//    }}
//    else {

//         for( i = 0; i < hide_bar.length; i++ ){
//             hide_bar[i].classList.remove('display_none')
//    }}}

hide_icon.addEventListener('click', function() {
    for( i = 0; i < hide_bar.length; i++ ){
        if(hide_bar[i].classList.contains('display_none')){
            hide_bar[i].classList.remove('display_none')
        } else {
            hide_bar[i].classList.add('display_none')
        }
        
        }}




    
);