
// Laboratorio #4

// Ejemplo de Objeto JavaScript
// Objeto que representa un video de YouTube
const video = {
    titulo: "Aprende JavaScript en 10 minutos",
    canal: "Programador X",
    visitas: 336000,
    duracion: "11:43",
    publicado: "23 de Julio de 2023",
    };

  // Desestructuramos las propiedades del objeto video
    const { titulo, canal, visitas, duracion, publicado } = video;

  // Mostrar la información por consola usando una plantilla de cadena de texto
    console.log(`Video de YouTube
    Título     : ${titulo}
    Canal      : ${canal}
    Visitas    : ${visitas}
    Duración   : ${duracion}
    Publicado  : ${publicado}`);


// Ejemplo de un arreglo de objetos
// Arreglo que representa una lista de videos
const videos = [
        {
        titulo: "Cómo aprender JavaScript",
        canal: "INFORMATICONFIG",
        visitas: 1200000,
        duracion: "12:30"
        },
        {
        titulo: "Trucos de CSS para principiantes",
        canal: "INFORMATICONFIG",
        visitas: 560000,
        duracion: "8:45"
        },
        {
        titulo: "¿Qué es Git y GitHub?",
        canal: "INFORMATICONFIG",
        visitas: 800000,
        duracion: "15:20"
        }
    ];

  // Mostrar los videos por consola
console.log("YouTube - Lista de Videos:\n");
    // Usamos un bucle forEach para recorrer el arreglo de videos
    // y mostrar la información de cada video
    videos.forEach((video, index) => {
    console.log(`Video #${index + 1}`);
    console.log(`Título   : ${video.titulo}`);
    console.log(`Canal    : ${video.canal}`);
    console.log(`Visitas  : ${video.visitas.toLocaleString()} vistas`);
    console.log(`Duración : ${video.duracion}`);
    console.log("--------------------------");
});
