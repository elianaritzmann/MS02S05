const dropdownBtn = document.querySelector('.dropdown-btn');
const dropdownContent = document.querySelector('.dropdown-content');

dropdownBtn.addEventListener('click', () => {
  dropdownContent.style.display = 
    dropdownContent.style.display === 'block' ? 'none' : 'block';
});

// Fecha o dropdown se clicar fora
window.addEventListener('click', function(e) {
  if (!e.target.matches('.dropdown-btn')) {
    dropdownContent.style.display = 'none';
  }
});