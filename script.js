const buttons = document.querySelectorAll('.category-filters button');
const items = document.querySelectorAll('.faq-item');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const target = button.getAttribute('data-target');

        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        items.forEach(item => {
            if (item.getAttribute('data-category') === target) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});