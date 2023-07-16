import guardarRegistro from "../utils/saveRow";

const addRow = (row) => {
  const newRow = document.createElement('tr');
  newRow.classList.add('table-row');
  const cells = row.querySelectorAll('td');

  newRow.innerHTML = `
    <td><input type="text" value="${cells[0].textContent}"></td>
    <td><input type="text" value="${cells[1].textContent}"></td>
    <td><input type="text" value="${cells[2].textContent}"></td>
    <td><input type="text" value="${cells[3].textContent}"></td>
    <td><input type="text" value="${cells[4].textContent}"></td>
    <td><i class="fa-solid fa-trash-can"></i></td>
    <td><button class="edit-button"><i class="fa-solid fa-pen-to-square"></i></button></td>
    <td><button class="save-button"><i class="fa-solid fa-floppy-disk"></i></button></td>
    `;

  const saveButton = newRow.querySelector('.save-button');
  saveButton.addEventListener('click', () => {
    guardarRegistro(row, newRow); // Pasa la fila original y la nueva fila a guardarRegistro
    newRow.remove();
  });

  row.after(newRow);
};


export default addRow;
