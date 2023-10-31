document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('expense-form');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const food = parseFloat(document.getElementById('food').value) || 0;
      const transport = parseFloat(document.getElementById('transport').value) || 0;
      const rent = parseFloat(document.getElementById('rent').value) || 0;
      const health = parseFloat(document.getElementById('health').value) || 0;
      const education = parseFloat(document.getElementById('education').value) || 0;
      const others = parseFloat(document.getElementById('others').value) || 0;

  
      
      const totalExpense = food + transport + rent + health + education + others;
  
      document.getElementById('result').textContent = `Despesa Total: ${totalExpense}`;
    });
  });
  