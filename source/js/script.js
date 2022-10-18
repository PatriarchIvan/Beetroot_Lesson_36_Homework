'use strict';

const input = document.querySelector('.marker__input');
const result = document.querySelector('.marker__result');
const color = document.querySelector('.color');
const capacityElem = document.querySelector('.capacity');
const refillBtn = document.querySelector('.refill');


class Marker {
    constructor(color, capacity) {
        this.color = color;
        this.capacity = +capacity;
    }

    writeText() {
        input.addEventListener('input', () => {
            if (this.capacity === 0) {
                result.style.color = '#a90202';
                result.value += '\n' + '*Refill your marker*';
                input.disabled = true;
            }
            // } else if (this.capacity < 0) {
            //     result.value += '';
            // }  
            else {
                result.value = input.value;
            }
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

    changeColor() {
        color.oninput = () => {
            this.color = color.value;
            result.style.color = `${this.color}`;
        };
    }

    showCapacity() {
        capacityElem.textContent = `Marker capacity: ${this.capacity}%`;
        input.oninput = () => {
            if (this.capacity <= 0) {
                capacityElem.textContent = 'Marker is EMPTY!';
            } else {
                capacityElem.textContent = `Marker capacity: ${this.capacity}%`;
            }
        };
    }

  refill() {
        refillBtn.addEventListener('click', () => {
            this.capacity = 15;
            input.disabled = false;
            capacityElem.textContent = `Marker capacity: ${this.capacity}%`;
            console.log('laaal');
        });
    }
}

const marker = new Marker('red', 5);

marker.writeText();
marker.changeCapacity();
marker.refill();
marker.showCapacity();
marker.changeColor();