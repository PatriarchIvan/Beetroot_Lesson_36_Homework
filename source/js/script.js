'use strict';

const input = document.querySelector('.marker__input');
const result = document.querySelector('.marker__result');
const color = document.querySelector('.color');
const capacityElem = document.querySelector('.capacity');


class Marker {
    constructor(color, capacity, str) {
        this.capacity = capacity;
        this.color = color;
        this.str = str;
    }

    writeText() {
        input.addEventListener('input', () => {
            result.textContent = input.value;
            // console.log(`${this.str} ${this.str.length}`);
            return this.str;
        });
    }

    lookStr() {
        console.log(this.str);
        console.log(this.str.length);
    }

    changeCapacity() {
        input.addEventListener('input', () => {
            this.str = result.textContent.replace(/\s/g, '');
            let arr = this.str.split('');
            for(let i = 0; i <= arr.length; i++) {}
            console.log(arr);
                this.capacity -= 0.5;
                console.log(this.capacity);
            });
    }

    changeColor() {
        color.oninput = () => {
            this.color = color.value;
            result.style.color = `${this.color}`;
        };
    }

    checkCapacity() {
        capacityElem.textContent = `Marker capacity: ${this.capacity}%`;
        input.oninput = () => {
            capacityElem.textContent = `Marker capacity: ${this.capacity}%`;
        };
    }

    refillMarker() {
        this.capacity = 100;
    }
}

const marker = new Marker('red', 100, 'Hello World');

marker.writeText();
marker.changeColor();
marker.checkCapacity();
marker.changeCapacity();