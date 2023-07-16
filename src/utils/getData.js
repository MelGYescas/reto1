export async function getData() {
    try {
        const response = await fetch('https://www.cityexpress.com/data/autocomplete.json');
        if (!response.ok) {
            throw new Error('Error al obtener los datos de la API');
        }
        const data = await response.json();
    
        console.log('Fetch correcto');
        return data;
    } catch (error) {
        console.error('Error al realizar la solicitud a la API:', error);
        throw error;
    }
}
