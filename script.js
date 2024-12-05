document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    
    alert('Ваша заявка отправлена!');
    
    
    this.reset();
});
