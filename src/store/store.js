import { defineStore } from 'pinia'
// import {useStorage} from "@vueuse/core";

export const useStore = defineStore('alerts', {
    state: () => ({
        products: [
            {
                id: 1,
                name: 'Red Car',
                price: 40,
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto blanditiis delectus ducimus eaque earum, fuga maxime repellendus temporibus. Doloremque, soluta.',
                image: '/images/red_car.jpg'
            },
            {
                id: 2,
                name: 'Black Car',
                price: 50,
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto blanditiis delectus ducimus eaque earum, fuga maxime repellendus temporibus. Doloremque, soluta.',
                image: '/images/black_car.jpg'
            },
            {
                id: 3,
                name: 'Yellow Car',
                price: 60,
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto blanditiis delectus ducimus eaque earum, fuga maxime repellendus temporibus. Doloremque, soluta.',
                image: '/images/yellow_car.jpg'
            },
            {
                id: 4,
                name: 'Green Car',
                price: 70,
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto blanditiis delectus ducimus eaque earum, fuga maxime repellendus temporibus. Doloremque, soluta.',
                image: '/images/green_car.jpg'
            },
        ],
        cart:[] 
    }),
    
    actions: {
        addToCart(product){
        this.cart.push(product)
      },
      increaseCart(id) {
        let itemIndex = this.cart.findIndex(item => item.id === id)
        this.cart[itemIndex].quantity += 1
    },
    decreaseCart(id) {
        let itemIndex = this.cart.findIndex(item => item.id === id)
        if (this.cart[itemIndex].quantity <= 1) {
            this.removeCart(id)
        } else {
            this.cart[itemIndex].quantity -= 1
        }
    },
    removeCart(id) {
        let itemIndex = this.cart.findIndex(item => item.id === id)
        this.cart.splice(itemIndex, 1)
    }

    },
})