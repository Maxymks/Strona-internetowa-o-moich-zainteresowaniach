// Przełącznik trybu jasny/ciemny
// Znajdź lub utwórz przycisk na stronie
const toggleBtn = document.createElement('button');
toggleBtn.textContent = 'Tryb jasny / ciemny';
toggleBtn.classList.add('toggle-theme');
document.body.appendChild(toggleBtn);

// Funkcja do przełączania klas na body
function toggleTheme() {
  document.body.classList.toggle('light-mode');
}

// Obsługa kliknięcia
toggleBtn.addEventListener('click', toggleTheme);

// Zapis preferencji użytkownika (opcjonalnie do rozbudowy)
// Można dodać localStorage w przyszłości
