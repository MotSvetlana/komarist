// PAGE CART - надо доработать для двух строк


const minus = document.querySelector('.input-number__minus');
const plus = document.querySelector('.input-number__plus');
const total = document.querySelector('.cart__block-amount'),
    min = 1,
    max = 10;


minus.addEventListener('click', () => {
    if (total.value > min) {
        total.value = +total.value - 1;
    };
});
plus.addEventListener('click', () => {
    if (total.value < max) { 
        total.value = +total.value + 1;
    }
});

