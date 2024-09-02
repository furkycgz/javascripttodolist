function newElement() {
    // Kullanıcıdan veri al
    let inputEleman = document.getElementById('task').value;
    
    // Veriyi listeye ekle
    if (inputEleman) {
        let ul = document.getElementById('list');
        let li = document.createElement('li');

        // Tik işaretini ekle
        let tickIcon = document.createElement('span');
        tickIcon.textContent = '✔'; // Tik işareti
        tickIcon.className = 'tick-icon';
        tickIcon.onclick = function(event) {
            event.stopPropagation(); // Tik işaretine tıklamayı durdur
            li.classList.toggle('completed');
        };
        li.appendChild(tickIcon);

        li.appendChild(document.createTextNode(inputEleman));

        // Close butonunu ekle
        let closeButton = document.createElement('button');
        closeButton.type = 'button';
        closeButton.className = 'btn-close';
        closeButton.setAttribute('aria-label', 'Close');
        closeButton.onclick = function(event) {
            event.stopPropagation(); // Close butonuna tıklamayı durdur
            ul.removeChild(li);
        };
        li.appendChild(closeButton);

        // Eleman üzerine tıklama olayını ekle
        li.onclick = function() {
            li.classList.toggle('show-tick');
            li.classList.toggle('completed');
        };

        ul.appendChild(li); // Yeni elemanı mevcut listenin sonuna ekle
        document.getElementById('task').value = ''; // Giriş alanını temizle
        // Başarılı toast mesajını göster
        $('.success').toast('show');
    } else {
        // Hata toast mesajını göster
        $('.error').toast('show');
    }
}

// Mevcut listedeki elemanlara close butonu ve tik işareti ekle
document.querySelectorAll('#list li').forEach(function(li) {
    // Tik işaretini ekle
    let tickIcon = document.createElement('span');
    tickIcon.textContent = '✔'; // Tik işareti
    tickIcon.className = 'tick-icon';
    tickIcon.onclick = function(event) {
        event.stopPropagation(); // Tik işaretine tıklamayı durdur
        li.classList.toggle('completed');
    };
    li.insertBefore(tickIcon, li.firstChild);

    // Close butonunu ekle
    let closeButton = document.createElement('button');
    closeButton.type = 'button';
    closeButton.className = 'btn-close';
    closeButton.setAttribute('aria-label', 'Close');
    closeButton.onclick = function(event) {
        event.stopPropagation(); // Close butonuna tıklamayı durdur
        li.parentNode.removeChild(li);
    };
    li.appendChild(closeButton);

    // Eleman üzerine tıklama olayını ekle
    li.onclick = function() {
        li.classList.toggle('show-tick');
        li.classList.toggle('completed');
    };
});

