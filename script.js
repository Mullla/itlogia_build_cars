const scrollToElement = (elementId) => {
    // можно не указывать { behavior: "smooth" } т.к. это прописано в стилях для html
    document.getElementById(elementId).scrollIntoView();
};

document.addEventListener('DOMContentLoaded', () => {
    const promoBtn = document.querySelector('.promo-btn');
    const carBtns = document.querySelectorAll('.car-btn');
    const orderBtn = document.querySelector('.order-btn');
    const orderForm = document.querySelector('.order-form');
    const orderImg = document.querySelector('.order-img');
    const promoSection = document.querySelector('.promo');

    promoBtn.addEventListener('click', () => {
        scrollToElement('cars');
    });

    carBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            scrollToElement('order');
        });
    });

    orderBtn.addEventListener('click', () => {
        [...orderForm.children].forEach(element => {
            if (element.tagName.toLowerCase() === 'span') {
                element.previousSibling.style.marginBottom = '20px';
                element.remove();
            }

            if (!element.value & element.tagName.toLowerCase() === 'input') {
                const errorMsg = document.createElement('span');
                errorMsg.textContent = `Заполните поле "${element.placeholder}"`;
                errorMsg.style.color = 'crimson';
                errorMsg.style.marginBottom = '20px';

                element.insertAdjacentElement('afterend', errorMsg);
                element.style.marginBottom = '5px';
            }
        })
    });

    document.addEventListener('mousemove', e => {
        orderImg.style.transform = `translate3d(${(e.clientX * 0.3) / 5}px, ${(e.clientY * 0.3) / 5}px, 0px)`;
    });

    document.addEventListener('scroll', () => {
        promoSection.style.backgroundPositionX = `0${0.2 * window.pageYOffset}px`;
    });
});