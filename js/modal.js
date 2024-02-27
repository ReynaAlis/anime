const modal = () => {
    const modal = document.querySelector('.search-model');
    const modalBtn = document.querySelector('.icon_search');
    const modalClose = modal.querySelector('.search-close-switch');
    const searchInput = document.getElementById('search-input');
    let timeoutId;


    modalBtn.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    modalClose.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    searchInput.addEventListener('input', () => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            console.log('Введенные данные:', searchInput.value.trim());
            searchInput.value = '';
        }, 500);
    });
}

modal()

