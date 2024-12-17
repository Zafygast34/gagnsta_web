// Información de los raperos
const raperos = {
    "eazy e": {
        info: "Eazy-E fue un pionero del gangsta rap, fundador de N.W.A y una figura clave en la escena del rap de los años 80. Su legado sigue vivo en el mundo del rap.",
        imagen: "eazy_e.jpg",
        biografia: "Eric Lynn Wright, mejor conocido como Eazy-E, fue un rapero y productor estadounidense, conocido como uno de los precursores del gangsta rap. Nació el 7 de septiembre de 1963 en Compton, California. Fue el fundador de Ruthless Records y uno de los miembros más influyentes de N.W.A. A pesar de su corta carrera, dejó un legado inmenso en la música y cultura del rap. Su estilo crudo y realista lo hizo una figura clave del movimiento hip-hop de la costa oeste.",
        discografia: ["Straight Outta Compton", "Eazy-Duz-It", "100 Miles and Runnin'"],
        influencia: "Eazy-E es considerado como el padrino del gangsta rap. Su forma de contar historias sobre la vida en las calles inspiró a generaciones de raperos posteriores, y su capacidad para producir y lanzar álbumes con N.W.A cambió para siempre la industria musical.",
        legado: "A pesar de su muerte prematura en 1995, Eazy-E sigue siendo una figura influyente. Su música, su enfoque en la independencia en la industria musical y su habilidad para crear una imagen de 'chico malo' siguen siendo una gran inspiración para artistas del rap actual."
    },
    "ice cube": {
        info: "Ice Cube, famoso rapero y actor, conocido por su estilo lírico contundente y su papel en N.W.A. También es reconocido por su exitosa carrera cinematográfica.",
        imagen: "ice cube.png",
        biografia: "Ice Cube, nacido O'Shea Jackson el 15 de junio de 1969 en Los Ángeles, California, es uno de los raperos más exitosos de todos los tiempos. Conocido por su estilo lírico agresivo, Cube se unió a N.W.A en sus primeros años y ayudó a definir el sonido del gangsta rap. Después de dejar N.W.A, comenzó su exitosa carrera en solitario y se diversificó en la actuación y la producción de películas.",
        discografia: ["AmeriKKKa's Most Wanted", "Death Certificate", "The Predator"],
        influencia: "Ice Cube ha sido una de las figuras más influyentes en la evolución del rap. Sus letras abordaban temas de violencia policial, racismo y las dificultades de la vida en el barrio, resonando con miles de jóvenes.",
        legado: "Cube no solo dejó una marca en la música, sino también en la cultura pop, con su exitosa carrera cinematográfica, participando en películas como 'Boyz n the Hood' y 'Friday'. Su capacidad para fusionar música y cine lo ha convertido en una leyenda multifacética."
    },
    "snoop dogg": {
        info: "Snoop Dogg es una leyenda del rap, con un estilo relajado y éxitos como 'Gin and Juice'.",
        imagen: "snoop dog.png",
        biografia: "Calvin Cordozar Broadus Jr., más conocido como Snoop Dogg, nació el 20 de octubre de 1971 en Long Beach, California. Fue descubierto por Dr. Dre en 1992 y se convirtió en una de las figuras más grandes del rap. Su primer álbum, 'Doggystyle', fue un éxito rotundo, y desde entonces ha mantenido una exitosa carrera en solitario. Snoop ha pasado de ser un ícono del rap a convertirse en una figura influyente en la cultura popular, también incursionando en la actuación y los negocios.",
        discografia: ["Doggystyle", "Tha Doggfather", "No Limit Top Dogg"],
        influencia: "Snoop Dogg es conocido por su estilo relajado, voz única y su habilidad para contar historias en sus letras. Su trabajo con Dr. Dre, así como su continuo éxito como solista, ha marcado un antes y un después en la evolución del rap.",
        legado: "Snoop ha sido un embajador global del rap y la cultura hip-hop. Su influencia sigue presente hoy, y es considerado uno de los raperos más importantes y longevos de todos los tiempos. Además, ha mantenido una presencia constante en los medios y ha cultivado una imagen de 'estrella' que trasciende la música."
    },
    "dr dre": {
        info: "Dr. Dre es un productor, rapero y empresario que definió el sonido del G-Funk.",
        imagen: "dr dree.png",
        biografia: "Andre Romelle Young, conocido profesionalmente como Dr. Dre, nació el 18 de febrero de 1965 en Compton, California. Fue uno de los miembros fundadores de N.W.A. y es considerado el padrino del sonido G-Funk. Dre no solo es conocido por su música, sino también por su capacidad para descubrir y lanzar las carreras de artistas como Snoop Dogg, Eminem, y 50 Cent.",
        discografia: ["The Chronic", "2001", "Compton"],
        influencia: "Dre es uno de los productores más influyentes en la historia del rap. Su capacidad para crear sonidos innovadores y su visión empresarial lo han convertido en una de las figuras más importantes de la industria.",
        legado: "El impacto de Dr. Dre en el rap y la música en general es incalculable. Su influencia sigue siendo fuerte, especialmente en la música actual. Es el creador de uno de los sonidos más distintivos del hip-hop."
    },
    "2pac": {
        info: "Tupac Shakur, también conocido como 2Pac, es uno de los raperos más influyentes de todos los tiempos, conocido por su profundidad lírica y activismo.",
        imagen: "2pac.png",
        biografia: "Tupac Amaru Shakur nació el 16 de junio de 1971 en East Harlem, Nueva York. Conocido por sus letras profundamente poéticas y su actitud rebelde, 2Pac fue un activista que utilizó su música para abordar temas de pobreza, racismo y justicia social. Su música y su vida fueron un reflejo de las realidades más duras de la vida urbana.",
        discografia: ["All Eyez on Me", "Me Against the World", "The Don Killuminati: The 7 Day Theory"],
        influencia: "2Pac es considerado una de las figuras más influyentes del rap. Sus letras y mensajes han tocado la vida de millones de personas. Su habilidad para fusionar la poesía con el rap le ha dado una enorme relevancia cultural.",
        legado: "Aunque su vida fue trágicamente corta (fue asesinado en 1996), el legado de 2Pac sigue vivo. Su música sigue siendo un pilar del rap, y su activismo y lucha por los derechos civiles lo mantienen vigente como un ícono cultural."
    }
};

// Función para mostrar la información y la imagen del rapero
function mostrarInfo() {
    const input = document.getElementById("rapero").value.toLowerCase();
    const infoDiv = document.getElementById("info");
    const imagenDiv = document.getElementById("imagenRapero");
    const regresarBtn = document.getElementById("regresar");

    if (raperos[input]) {
        // Mostrar información
        infoDiv.innerHTML = `
            <h2>Biografía</h2>
            <p>${raperos[input].biografia}</p>
            <h3>Discografía</h3>
            <ul>
                ${raperos[input].discografia.map(disco => `<li>${disco}</li>`).join('')}
            </ul>
            <h3>Influencias y Legado</h3>
            <p><strong>Influencias:</strong> ${raperos[input].influencia}</p>
            <p><strong>Legado:</strong> ${raperos[input].legado}</p>
        `;
        infoDiv.style.display = "block";

        // Mostrar imagen
        imagenDiv.style.display = "block";
        imagenDiv.innerHTML = `<img src="${raperos[input].imagen}" alt="Imagen de ${input}" class="imagen-rapero">`;

        // Mostrar el botón para regresar
        regresarBtn.style.display = "block";
    } else {
        infoDiv.textContent = "No se encontró información sobre ese rapero.";
        infoDiv.style.display = "block";
        imagenDiv.style.display = "none";
        regresarBtn.style.display = "none"; // Ocultar el botón si no hay resultados
    }
}

// Función para volver al formulario de búsqueda
function volverBuscar() {
    const infoDiv = document.getElementById("info");
    const imagenDiv = document.getElementById("imagenRapero");
    const busquedaDiv = document.querySelector('.busqueda');
    const regresarBtn = document.getElementById("regresar");

    // Ocultar la información y la imagen
    infoDiv.style.display = "none";
    imagenDiv.style.display = "none";

    // Mostrar el formulario de búsqueda
    busquedaDiv.style.display = 'flex'; // Asegurarse que el formulario esté visible

    // Ocultar el botón de regresar
    regresarBtn.style.display = "none";
}
