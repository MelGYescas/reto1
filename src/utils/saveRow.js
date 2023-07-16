const guardarRegistro = (originalRow, newRow) => {
    // Verifica si newRow existe y tiene td
    if (newRow && newRow.querySelectorAll) {
        const inputValues = newRow.querySelectorAll('input[type="text"]');
        const newData = Array.from(inputValues).map(input => input.value);
    
        const cells = originalRow.querySelectorAll('td:not(:last-child)');
        Array.from(cells).forEach((cell, index) => {
            cell.textContent = newData[index];
        });
        const secondLastCell = originalRow.querySelector('td:nth-last-child(2)');
        secondLastCell.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
        const lastCell = originalRow.querySelector('td:last-child');
        lastCell.innerHTML = `
            <button class="edit-button"><i class="fa-solid fa-pen-to-square"></i></button>
        `;
    
        // console.log('Datos modificados:', newData);
    } else {
        // console.log('El elemento newRow no está disponible o no tiene ningún td');
    }
};

export default guardarRegistro;
