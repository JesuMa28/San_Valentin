var movimientosBoton = 0;

document.getElementById('no').addEventListener('mouseover', function() {
    var botonNo = document.getElementById('no');
    var maxWidth = window.innerWidth - botonNo.clientWidth;
    var maxHeight = window.innerHeight - botonNo.clientHeight;

    var newLeft = Math.floor(Math.random() * maxWidth);
    var newTop = Math.floor(Math.random() * maxHeight);

    botonNo.style.position = 'absolute';
    botonNo.style.left = newLeft + 'px';
    botonNo.style.top = newTop + 'px';

    // Aumentar el tamaño del boton Si
    var botonSi = document.getElementById('si');
    var nuevoTamano = parseFloat(window.getComputedStyle(botonSi).fontSize) * 1.05; // Aumentar en un 5%
    botonSi.style.fontSize = nuevoTamano + 'px'; // Aplicar el nuevo tamaño al texto del botón

    // Reducir el tamño del boton No    
    var nuevoAncho = botonNo.clientWidth * 0.9;
    var nuevoAlto = botonNo.clientHeight * 0.9;
    botonNo.style.width = nuevoAncho + 'px';
    botonNo.style.height = nuevoAlto + 'px';
    botonNo.style.fontSize = parseFloat(window.getComputedStyle(botonNo).fontSize) * 0.9 + 'px';
    botonNo.style.textAlign = 'center';
    botonNo.style.lineHeight = botonNo.clientHeight + 'px';

    movimientosBoton++;

    if (movimientosBoton === 6) {
        mostrarFrase6();
    }

    // Desaparecer el botón cuando el contador llegue a 10
    if (movimientosBoton === 10) {
        mostrarFrase10();
        setTimeout(function() {
            botonNo.style.opacity = '0'; // Hacer transparente el botón
            botonNo.style.pointerEvents = 'none'; // Desactivar interacción con el botón
        }, 3000); // Retraso de 2 segundos
    }
});

function mostrarFrase6() {
    var fraseElement1 = document.createElement('p');
    fraseElement1.textContent = '¿LA SEXTA VEZ YA? 😱';
    fraseElement1.style.fontSize = '12px';
    fraseElement1.style.marginTop = '10px';

    var contenedorFrases = document.querySelector('.frases');
    contenedorFrases.appendChild(fraseElement1);

    setTimeout(function() {
        var fraseElement2 = document.createElement('p');
        fraseElement2.textContent = '¿Quieres que Nazan llore? 🥺';
        fraseElement2.style.fontSize = '12px';
        fraseElement2.style.marginTop = '10px';

        contenedorFrases.appendChild(fraseElement2);
    }, 1000);
}

function mostrarFrase10() {
    var fraseElement1 = document.createElement('p');
    fraseElement1.textContent = 'HMMMMM 🤔...';
    fraseElement1.style.fontSize = '12px';
    fraseElement1.style.marginTop = '10px';

    var contenedorFrases = document.querySelector('.frases');
    contenedorFrases.appendChild(fraseElement1);

    setTimeout(function() {
        var fraseElement2 = document.createElement('p');
        fraseElement2.textContent = 'Creo que mejor vamos a quitar esto...';
        fraseElement2.style.fontSize = '12px';
        fraseElement2.style.marginTop = '10px';

        contenedorFrases.appendChild(fraseElement2);
    }, 2000);
}
