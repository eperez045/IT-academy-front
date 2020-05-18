const selectElement = (s) => document.querySelector(s);
// Abrir menu por click
selectElement('.open').addEventListener('click', () => {
    selectElement('.nav-list').classList.add('active');
});
// Cerrar menu por click
selectElement('.close').addEventListener('click', () => {
    selectElement('.nav-list').classList.remove('active');
});