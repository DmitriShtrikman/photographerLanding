"use strict";

Vue.component('photo', {
    data(){
        return {
            photos: [],
        }
    },
    mounted(){
        this.$parent.getJson(`/catalogData`)
            .then(data => {
                for(let photo of data){
                    this.photos.push(photo);
                }                                    
        });
    },
    methods: {
        openWindow(){
            document.getElementById('bigphoto').style.display = 'flex';
            document.querySelector('.portfolio-mosaic').addEventListener('click', (event) => {
                let idKey = event.target.id;
                this.$parent.photoNumber = idKey;
                console.log(idKey);
             });
             
        },
    },
    template: `
    <div class="portfolio-wrp container">
        <h1 class="portfolio-header">Lorem ipsum dolor sit.</h1>
        <div class="portfolio-mosaic">
            <img v-for="photo of photos" class="portfolio-mosaic-preview" :id="photo.id" :src="photo.img" alt="photo" @click="openWindow()">
        </div>
    </div>
    `
});