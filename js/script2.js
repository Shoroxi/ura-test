// script2.js
document.getElementById('pay-button').addEventListener('click', function() {
    const paymentMessage = document.getElementById('payment-message');
    paymentMessage.classList.remove('hidden');
    
    // Установить тайм-аут на 3 секунды (3000 миллисекунд)
    setTimeout(function() {
        paymentMessage.classList.add('hidden');
    }, 3000);
});