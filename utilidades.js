
  function soloNumeros(evt) {
    const codigo = evt.keyCode;
    if (codigo >= 48 && codigo <= 57)
        return true;
    return false;
}
function limpiar() {

    document.querySelectorAll('.form-control').forEach(item => {
        item.value = ''
    })
    document.querySelectorAll('.form-select').forEach(item => {
        item.value = ''
    })
    document.querySelectorAll('.form-check-input').forEach(item => {
        item.checked = false
    })
    document.querySelectorAll('span').forEach(item => {
        item.innerHTML = ''
    })
}
function limpiarCheck(input) {
    if (document.querySelector('input[name="' + input + '"]:checked'))
        document.getElementById('e' + input).innerHTML = ''
}
function limpiarSelect(input) {
    if (document.getElementById(input).value != '')
        document.getElementById('e' + input).innerHTML = ''
}