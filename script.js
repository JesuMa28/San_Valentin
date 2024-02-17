document.getElementById('no').addEventListener('mouseover', function() {
    var botonNo = document.getElementById('no');
    var maxWidth = window.innerWidth - botonNo.clientWidth;
    var maxHeight = window.innerHeight - botonNo.clientHeight;

    var newLeft = Math.floor(Math.random() * maxWidth);
    var newTop = Math.floor(Math.random() * maxHeight);

    botonNo.style.position = 'absolute';
    botonNo.style.left = newLeft + 'px';
    botonNo.style.top = newTop + 'px';

    // Reducir el tamaño del botón
    var nuevoAncho = botonNo.clientWidth * 0.9; // Reducir en un 10%
    var nuevoAlto = botonNo.clientHeight * 0.9;
    botonNo.style.width = nuevoAncho + 'px';
    botonNo.style.height = nuevoAlto + 'px';

    // Reducir el tamaño del texto del botón
    botonNo.style.fontSize = parseFloat(window.getComputedStyle(botonNo).fontSize) * 0.9 + 'px';
});
