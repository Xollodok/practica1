document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Здесь можно добавить логику отправки формы
    alert('Ваша заявка отправлена!');
    
    // Очистка формы
    this.reset();
});