function openPopup(id) {
        document.getElementById(id).style.display = 'flex';
    }

    function closePopup(id) {
        document.getElementById(id).style.display = 'none';
    }

    function searchProducts() {
        const input = document.getElementById('searchlmput');
        const filter = input.value.toLowerCase();
        const products = document.getElementsByClassName('product');

        for (let i = 0; i < products.length; i++) {
            const title = products[i].getAttribute('data-title').toLowerCase();
            products[i].style.display = title.includes(filter) ? '' : 'none';
        }
    }

    function drag(event) {
        event.dataTransfer.setData("text/plain", event.target.id);
    }

    document.querySelectorAll('.product').forEach(product => {
        product.addEventListener('dragover', (event) => {
            event.preventDefault();
        });
        
        product.addEventListener('drop', (event) => {
            event.preventDefault();
            const draggedId = event.dataTransfer.getData("text/plain");
            const draggedElement = document.getElementById(draggedId);
            const targetElement = event.target.closest('.product');
            
            // Swap elements only if they are different
            if (draggedElement !== targetElement) {
                const parent = draggedElement.parentNode;
                const nextSibling = targetElement.nextElementSibling === draggedElement ? targetElement : targetElement.nextElementSibling;
                parent.insertBefore(draggedElement, nextSibling);
            }
        });
    });
function orderProducttl(productName) {
    // Ganti dengan URL bot Telegram Anda
    const telegramBotUrl = "https://t.me/rerez_x_hosting?text=" + encodeURIComponent(productName);
    window.open(telegramBotUrl, "_blank"); // Membuka link di tab baru
}

function orderProductwa(productName) {
    // Ganti dengan nomor WhatsApp Anda
    const phoneNumber = "6285216955233"; // Nomor WhatsApp tanpa tanda +
    const message = `Saya ingin memesan: ${productName}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank"); // Membuka link di tab baru
}

