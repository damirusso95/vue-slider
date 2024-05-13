// :pacco: CONSEGNA
// In allegato trovate del codice di base del carosello, dovrete partire da quello! :avviso:
// Partendo dal markup HTML/CSS in allegato, rifate lo slider ma usando Vue.

// Dovrete tenere traccia da qualche parte di qual'è la slide attiva (che sarà visibile).
// :roccia: MILESTONE 2:
// Fate lo stesso con le thumbnail. In questo caso la thumb attiva sarà evidenziata.
// :roccia: MILESTONE 3:
// Aggiungete gli event handler per i click sulle frecce di navigazione.



// const slides = [
// {
//     image: 'img/01.webp',
//         title: 'Marvel\'s Spiderman Miles Morale',
//         text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
//     }, {
//         image: 'img/02.webp',
//         title: 'Ratchet & Clank: Rift Apart',
//         text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
//     }, {
//         image: 'img/03.webp',
//         title: 'Fortnite',
//         text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
//     }, {
//         image: 'img/04.webp',
//         title: 'Stray',
//         text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
//     }, {
//         image: 'img/05.webp',
//         title: "Marvel's Avengers",
//         text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
//     }
// // ];

// console.log(slides);


const { createApp } = Vue

createApp({

    data() {
        return {
            images: [
                {
                    image: 'img/01.webp',
                        title: 'Marvel\'s Spiderman Miles Morale',
                        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                    }, {
                        image: 'img/02.webp',
                        title: 'Ratchet & Clank: Rift Apart',
                        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                    }, {
                        image: 'img/03.webp',
                        title: 'Fortnite',
                        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                    }, {
                        image: 'img/04.webp',
                        title: 'Stray',
                        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                    }, {
                        image: 'img/05.webp',
                        title: "Marvel's Avengers",
                        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                    }
            ],
            activeImage: 0,
            
        }
    },
    methods: {
        checkImageVisibility(indice) {
            return (indice == this.activeImage) ? 'active' : '';
        },
       
        next() {
            this.activeImage++;
        },
        back() {
            this.activeImage--;
        },
        mostraSlide(indice) {
            this.activeImage = indice;
        }
    },
    // mounted() {
    //     // this.activeImage = 3;
    //     console.log("Slide iniziale: ", this.activeImage);

    //     this.timer = setInterval(function () {
    //         console.log("passato un secondo");
    //     }, 1000);
    // }

}).mount('#app')