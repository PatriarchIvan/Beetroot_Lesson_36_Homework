'use strict';

const input = document.querySelector('.marker__input');
const result = document.querySelector('.marker__result');
const color = document.querySelector('.color');
const capacityElem = document.querySelector('.capacity');
const refillBtn = document.querySelector('.refill');


class Marker {
    constructor(color, capacity, str) {
        this.capacity = capacity;
        this.color = color;
        this.str = str;
    }

    writeText() {
        input.addEventListener('input', () => {
            result.textContent = input.value;
            return this.str;
        });
    }

    changeCapacity() {
        input.addEventListener('keydown', (e) => {
            if (e.which === 32) {
                // 32 is the CODE OF BUTTON - SPACE
                this.capacity = this.capacity;
                console.log(this.capacity);
            } else {
                this.capacity -= 0.5;
                console.log(this.capacity);
            }

        });
    }

    refill() {
        this.capacity = 100;
        capacityElem.textContent = `Marker capacity: ${this.capacity}%`;
    }

    changeColor() {
        color.oninput = () => {
            this.color = color.value;
            result.style.color = `${this.color}`;
        };
    }

    showCapacity() {
        capacityElem.textContent = `Marker capacity: ${this.capacity}%`;
        input.oninput = () => {
            capacityElem.textContent = `Marker capacity: ${this.capacity}%`;
        };
    }


}

const marker = new Marker('red', 100, 'Hello World');

marker.writeText();
marker.changeColor();
marker.changeCapacity();
marker.showCapacity();
refillBtn.addEventListener('click', marker.refill());