    "use strict";

 document.querySelector('.show-post').addEventListener('click', (event) => {
    event.preventDefault;
    document.querySelector('.show-post').classList.add('hidden');
    $('.hidden-text').fadeIn();
 });