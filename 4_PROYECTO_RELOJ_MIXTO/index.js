function calcularTime() {

    let tiempo = new Date();


    let hora = tiempo.getHours();
    let minuto = tiempo.getMinutes();
    let segundo = tiempo.getSeconds();
    
    hora = hora < 10 ? "0" + hora : hora;
    minuto = minuto < 10 ? "0" + minuto : minuto;
    segundo = segundo < 10 ? "0" + segundo : segundo;

    let amPm = hora >= 12 ? "PM" : "AM"; // Determinar AM o PM

    hora = hora % 12 || 12; // Convertir hora a formato 12 horas

    let pantallaReloj = hora + ":" + minuto + ":" + segundo;
    let relojDigitalContent = document.querySelector("#reloj-digital-content");
    let amPmElement = document.querySelector("#am-pm");

    relojDigitalContent.textContent = pantallaReloj;
    amPmElement.textContent = amPm;

    const deg = 6;

    const horas = document.querySelector('.hora');
    const minutos = document.querySelector('.minuto');
    const segundos = document.querySelector('.segundo');

    let hr = hora * 30;
    let min = minuto * deg;
    let seg = segundo * deg;

    horas.style.transform = `rotate(${(hr) + (min / 12)}deg)`;
    minutos.style.transform = `rotate(${min}deg)`;
    segundos.style.transform = `rotate(${seg}deg`;
}

setInterval(calcularTime, 1000);

// Llama a calcularTime al cargar la página para establecer la hora inicial.
calcularTime();
