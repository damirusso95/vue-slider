// :pacco: CONSEGNA
// In allegato trovate del codice di base del carosello, dovrete partire da quello! :avviso:
// Partendo dal markup HTML/CSS in allegato, rifate lo slider ma usando Vue.

// Dovrete tenere traccia da qualche parte di qual'è la slide attiva (che sarà visibile).
// :roccia: MILESTONE 2:
// Fate lo stesso con le thumbnail. In questo caso la thumb attiva sarà evidenziata.
// :roccia: MILESTONE 3:
// Aggiungete gli event handler per i click sulle frecce di navigazione.
const { createApp } = Vue

createApp({
    data() {
        return {
            slides: [
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
                },
            ],

            imgAttiva: 0
        }
    },
    methods: {
        // funzione per previous
        previous() {
            if (this.imgAttiva == 0) {
                this.imgAttiva = (this.slides.length - 1)
            } else this.imgAttiva -= 1;
        },
        next() {
            if (this.imgAttiva == (this.slides.length - 1)) {
                this.imgAttiva = 0
            } else this.imgAttiva += 1;
        },

        controlloImg(index, classe) {
            if (index == this.imgAttiva) {
                console.log(classe)
                return classe
            } else return ''
        },

        miniToImg(i) {
            this.imgAttiva = i;
            console.log(i)
        },
        


    },
    mounted() {
        this.intervallo = setInterval(() => {
            this.next();
        }, 3000);

        console.log('app vue montanta correttamente')
    }
},

).mount('#app')