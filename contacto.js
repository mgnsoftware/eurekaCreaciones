const form = document.querySelector('#quote');
const businessPhone = '525554695026';

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const fields = ['nombre', 'correo', 'telefono', 'asunto'];

    for (const name of fields) {
        const field = form.elements.namedItem(name);
        if (!String(data.get(name)).trim()) {
            field.setCustomValidity('Completa este campo.');
            field.reportValidity();
            return;
        }
    }

    const message = [
        'Hola, Eureka Creaciones. Me gustaría cotizar un proyecto.',
        '',
        'Nombre completo: ' + data.get('nombre').trim(),
        'Correo electrónico: ' + data.get('correo').trim(),
        'Teléfono: ' + data.get('telefono').trim(),
        'Asunto: ' + data.get('asunto').trim()
    ].join('\n');

    window.location.assign('https://wa.me/' + businessPhone + '?text=' + encodeURIComponent(message));
});

form.addEventListener('input', (event) => {
    event.target.setCustomValidity('');
});
