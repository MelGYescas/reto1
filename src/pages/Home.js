import { getData } from '../utils/getData';

const Home = async () => {
    const data = await getData(); 

    const tableRows = data.map(hotel => {
        return `
        <tr class="table-row" data-id="${hotel.value}">
            <td>${hotel.label ? hotel.label : ''}</td>
            <td>${hotel.value ? hotel.value : ''}</td>
            <td>${hotel.tipo ? hotel.tipo : ''}</td>
            <td>${hotel.marca ? hotel.marca : ''}</td>
            <td>${hotel.codigo ? hotel.codigo : ''}</td>
            <td><i class="fa-solid fa-trash-can"></i></td>
            <td><button class="edit-button"><i class="fa-solid fa-pen-to-square"></i></button></td>
        </tr>
        `;
    }).join('');

    const view = `
        <table class="table">
        <thead>
            <tr>
            <th>Etiqueta</th>
            <th>Valor</th>
            <th>Tipo</th>
            <th>Marca</th>
            <th>Codigo</th>
            <th></th>
            <th></th>
            <th></th>
            </tr>
        </thead>
        <tbody>
            ${tableRows}
        </tbody>
        </table>
    `;

    return view;
};

export default Home;
