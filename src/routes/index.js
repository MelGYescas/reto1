import Header from '../templates/Header';
import Home from '../pages/Home';
import addRow from '../pages/addRow';
import eliminarRegistro from '../utils/deleteRows';
import guardarRegistro from '../utils/saveRow';


const routes = {
  '/': Home
};

const router = async () => {
  const header = null || document.getElementById('header');
  const content = null || document.getElementById('content');

  header.innerHTML = await Header();
  content.innerHTML = await Home();

  // Agrega un evento de clic al elemento table
  const table = document.querySelector('table');
  table.addEventListener('click', (e) => {
    const targetElement = e.target;
    
    // Si se hizo clic en un ícono de basura
    if (targetElement.classList.contains('fa-trash-can')) {
      const value = targetElement.closest('.table-row').dataset.id;
      const row = document.querySelector(`tr[data-id="${value}"]`);
      eliminarRegistro(row);
    }
    
    // Si se hizo clic en un botón de edición
    else if (targetElement.closest('.edit-button')) {
      const value = targetElement.closest('.table-row').dataset.id;
      const row = document.querySelector(`tr[data-id="${value}"]`);
      addRow(row);
    }

    // Si se hizo clic en un botón de guardar
    else if (targetElement.closest('.save-button')) {
      const row = targetElement.closest('.table-row');
      const newRow = row.previousElementSibling; 
      guardarRegistro(row, newRow);
      if (newRow) {
        newRow.remove();
      } else {
        // console.log('newRow es null');
      }
    }
  });
};

export default router;