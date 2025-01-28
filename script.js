// Funktion för att öppna en popup
function openPopup(linkId, popupId) {
    const link = document.getElementById(linkId);
    const popup = document.getElementById(popupId);
    const overlay = document.getElementById('popup-overlay');
    const closeBtn = popup.querySelector('.close-btn');

    // Visa popupen
    link.addEventListener('click', (e) => {
        e.preventDefault();
        popup.classList.add('active');
        overlay.classList.add('active');
        document.body.classList.add('popup-active');
    });

    closeBtn.addEventListener('click', () => {
        closePopup();
    });

    overlay.addEventListener('click', (e) => {
        // Kontrollera att det är overlayen som klickas, inte popupen
        if (e.target === overlay) {
            closePopup();
        }
    });

    function closePopup() {
        popup.classList.remove('active');
        overlay.classList.remove('active');
        document.body.classList.remove('popup-active');
    }
}

// Anropa funktionen för varje popup
openPopup('about-link', 'about-popup');
openPopup('case1', 'case1-popup');
openPopup('case2', 'case2-popup');
openPopup('case3', 'case3-popup');
openPopup('case4', 'case4-popup');
openPopup('case5', 'case5-popup');
