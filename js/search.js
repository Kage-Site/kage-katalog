document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('itemSearch');
    const catalogGrid = document.getElementById('catalogGrid');
    
    if (!searchInput || !catalogGrid) return;

    const cards = catalogGrid.getElementsByClassName('card');

    searchInput.addEventListener('keyup', () => {
        const filter = searchInput.value.toLowerCase().trim();

        for (let i = 0; i < cards.length; i++) {
            const card = cards[i];
            const numberElement = card.querySelector('.card-number');
            
            if (numberElement) {
                const itemNumber = numberElement.textContent.toLowerCase();

                if (filter === "" || itemNumber.includes(filter)) {
                    card.style.display = "";
                } else {
                    card.style.display = "none";
                }
            }
        }
    });
});