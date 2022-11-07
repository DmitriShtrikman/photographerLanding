   "use strict";

   const app = new Vue({
      el: '#app',
      data: {
         photoNumber: '0'
      },
      methods: {
         getJson(url){
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                })
        },
      }
   });

   document.querySelector('.show-post').addEventListener('click', (event) => {
      event.preventDefault;
      document.querySelector('.show-post').classList.add('hidden');
      $('.hidden-text').fadeIn();
   });