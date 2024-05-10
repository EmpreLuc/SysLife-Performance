export function cargarHeadersDesdeJSON(jsonFileName,index) {
    // Cargar los encabezados desde el archivo jsonHeaders
    const jsonHeaders = JSON.parse(open(jsonFileName));

    // Convertir los encabezados en un objeto plano
    const headers = {};

    for (let key in jsonHeaders[index]) {
        headers[key] = jsonHeaders[index][key];
    }

    return headers;
}