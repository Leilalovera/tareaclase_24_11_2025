// ========================================
// FUNCIÓN PARA DESCARGAR IMÁGENES
// ========================================
function downloadImage(url, name) {
    fetch(url)
        .then(res => res.blob())
        .then(blob => {
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = `${name}.jpg`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(link.href);
        })
        .catch(error => {
            console.error('Error al descargar:', error);
            alert('Error al descargar la imagen');
        });
}

// ========================================
// FUNCIÓN PARA INICIALIZAR CANVAS
// ========================================
function initCanvas() {
    const canvas = document.getElementById('myCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Fondo azul
    ctx.fillStyle = '#3498db';
    ctx.fillRect(0, 0, 400, 200);
    
    // Círculo amarillo
    ctx.beginPath();
    ctx.arc(200, 100, 60, 0, Math.PI * 2);
    ctx.fillStyle = '#ffcc00';
    ctx.fill();
    
    // Texto
    ctx.fillStyle = '#000';
    ctx.font = '20px Arial';
    ctx.fillText('Canvas Interactivo', 125, 190);
}

// ========================================
// ANIMACIONES DE ENTRADA
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    // Animación suave para elementos
    const elements = document.querySelectorAll('.bg-white');
    elements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            el.style.transition = 'all 0.6s ease';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

// ========================================
// CONSOLE LOG
// ========================================
console.log('%c¡Proyecto Multimedia!', 'color: #9333ea; font-size: 20px; font-weight: bold;');
console.log('%cPor Leila Ruiz', 'color: #2563eb; font-size: 14px;');