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
            Descripción: <br>
            Dado esta archivo JSON https://www.cityexpress.com/data/autocomplete.json, guardarlo en local y renderizar en una tabla todos los hoteles y cada una de sus propiedades(Código de hotel, Marca, etiqueta de hotel, boton de eliminar y editar )
            </p>
            <p>Hecho con <i class="fa-solid fa-heart"></i></p>
            </div>
            </div>
        </div>
    `;
    return view;
};

export default Header;
