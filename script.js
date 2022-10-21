const scrollToElement = (elementId) => {
    // можно не указывать { behavior: "smooth" } т.к. это прописано в стилях для html
    document.getElementById(elementId).scrollIntoView();
};

document.addEventListener('DOMContentLoaded', () => {
    const promoBtn = document.querySelector('.promo-btn');
    const carBtns = document.querySelectorAll('.car-btn');
    const orderBtn = document.querySelector('.order-btn');
    const orderForm = document.querySelector('.order-form');

    promoBtn.addEventListener('click', () => {
        scrollToElement('cars');
    });

    carBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            scrollToElement('order');
        });
    });

    orderBtn.addEventListener('click', () => {
        [...orderForm.elements].forEach(input => {
            if (!input.value & input.tagName.toLowerCase() === 'input') {
                const errorMsg = document.createElement('span');
                errorMsg.textContent = `Заполните поле "${input.placeholder}"`;
                errorMsg.style.color = 'crimson';
                errorMsg.style.marginBottom = '20px';

                input.insertAdjacentElement('afterend', errorMsg);
                input.style.marginBottom = '5px';
            }
        })
    })
});