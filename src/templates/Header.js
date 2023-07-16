const Header = () => {
    const view = `
        <div class="Header-main">
            <div class="Header-logo">
            <h1>
                Reto 1
            </h1>
            </div>
            <div class="Header-summary">
            <p>
                Instrucciones:<br>
                Para completar este proyecto, sigue las siguientes instrucciones:
                <br><br>
                1. Accede al archivo JSON en la siguiente URL: <a href="https://www.cityexpress.com/data/autocomplete.json">https://www.cityexpress.com/data/autocomplete.json</a>. Descarga este archivo y guárdalo localmente.
                <br><br>
                2. Utilizando JavaScript y Webpack, crea una aplicación que renderice una tabla con todos los hoteles y sus respectivas propiedades, incluyendo el código de hotel, la marca, la etiqueta del hotel, y botones para eliminar y editar cada hotel.
                <br><br>
                Descripción:<br>
                Este proyecto consiste en desarrollar una aplicación web utilizando JavaScript, HTML y CSS. El objetivo principal es obtener los datos de un archivo JSON de hoteles, almacenarlo localmente y mostrarlos en una tabla en la página. Cada fila de la tabla representará un hotel y mostrará sus propiedades, como el código de hotel, la marca y la etiqueta del hotel. Además, se proporcionarán botones para permitir la eliminación y edición de cada hotel. La aplicación se desarrollará utilizando Webpack para el empaquetado y gestión de dependencias de JavaScript. Se enfoca en el uso de técnicas de manipulación del DOM y renderizado de datos dinámicos.
            </p>

            <p>Hecho con <i class="fa-solid fa-heart"></i></p>
            </div>
            </div>
        </div>
    `;
    return view;
};

export default Header;
