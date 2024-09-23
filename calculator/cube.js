const sideInput = document.getElementById('inp-1');
const volumeInput = document.getElementById('inp-3');
const surfaceInput = document.getElementById('inp-2');
const surfaceButton = document.getElementById('btn-1');
const volumeButton = document.getElementById('btn-2');
const resetButton = document.getElementById('btn-3');

surfaceButton.addEventListener('click', calculateSurface);
volumeButton.addEventListener('click', calculateVolume);
resetButton.addEventListener('click', resetField);

function calculateSurface() {
    const side = parseFloat(sideInput.value);
    if (!isNaN(side) && (side > 0)) {
        const surfaceArea = 6 * (side ** 2);
        surfaceInput.value = surfaceArea;
    }
    else {
        alert('Invilid ! value please enter a vlid value ');
    }
}
function calculateVolume() {
    const side = parseFloat(sideInput.value);
    if (!isNaN(side) && (side > 0)) {
        const volume = side ** 3;
        volumeInput.value = volume;
    } else {
        alert('Invilid ! value please enter a vlid value ');
    }
}
function resetField() {
    surfaceInput.value = '';
    sideInput.value = '';
    volumeInput.value = '';
}