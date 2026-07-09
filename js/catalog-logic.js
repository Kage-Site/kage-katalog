document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('itemSearch');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.card');
    
    // Элементы Модального Окна
    const modal = document.getElementById('itemModal');
    const modalClose = document.getElementById('modalClose');
    
    let activeFilter = 'all';
    let searchQuery = '';

    // 1. Умная Фильтрация (Поиск + Кнопки)
    function filterCatalog() {
        cards.forEach(card => {
            const cardRarity = card.getAttribute('data-rarity');
            const cardTitle = card.getAttribute('data-title').toLowerCase();
            const cardNum = card.getAttribute('data-num').toLowerCase();
            
            const matchesFilter = (activeFilter === 'all' || cardRarity === activeFilter);
            const matchesSearch = (searchQuery === '' || cardTitle.includes(searchQuery) || cardNum.includes(searchQuery));

            if (matchesFilter && matchesSearch) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Обработчик клавиатуры (Поиск)
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            searchQuery = searchInput.value.toLowerCase().trim();
            filterCatalog();
        });
    }

    // Обработчик кнопок-тегов
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeFilter = btn.getAttribute('data-filter');
            filterCatalog();
        });
    });

   // 2. Логика Попапа + Безопасная Сборка Ссылки для Телеграм
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const title = card.getAttribute('data-title');
            const num = card.getAttribute('data-num');
            const img = card.getAttribute('data-img');
            const kk = card.getAttribute('data-kk');
            const dia = card.getAttribute('data-dia');
            const desc = card.getAttribute('data-desc');
            const specs = card.getAttribute('data-specs');
            const rarityText = card.querySelector('.card-rarity').textContent;
            const rarityClass = card.getAttribute('data-rarity');

            document.getElementById('modalTitle').textContent = title;
            document.getElementById('modalNum').textContent = num;
            document.getElementById('modalImg').src = img;
            document.getElementById('modalKk').textContent = kk;
            document.getElementById('modalDia').textContent = dia;
            document.getElementById('modalDesc').textContent = desc;
            document.getElementById('modalSpecs').textContent = specs;
            
            const badge = document.getElementById('modalRarity');
            badge.textContent = rarityText;
            badge.className = 'modal-rarity-badge text-' + rarityClass;

            // БЕЗОПАСНАЯ СКЛЕЙКА НИКНЕЙМА ОТ БОТОВ ГИТХАБА
            const part1 = 'Iam';
            const part2 = 'MiDav';
            const tgUsername = part1 + part2; 
            
            const messageText = `Привет! Хочу купить предмет из каталога KageCorp:\n📦 Товар: ${title} (${num})\n💰 Цена: ${kk} / ${dia}`;
            const encodedText = encodeURIComponent(messageText);
            
            // === ВОТ СЮДА МЫ ЕГО ВСТАВИЛИ ===
            const buyBtn = modal.querySelector('.modal-buy-btn'); 
            if (buyBtn) {
                buyBtn.href = `https://t.me/${tgUsername}?text=${encodedText}`;
            }
            // ===============================

            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    // Закрытие по крестику
    if (modalClose) {
        modalClose.addEventListener('click', () => {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    // Закрытие при клике по темной области мимо окна
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
});