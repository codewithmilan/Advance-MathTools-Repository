const radiusInput = document.getElementById('inp-1');
const surfaceInput = document.getElementById('inp-2');
const volumeInput = document.getElementById('inp-3');
const surfaceButton = document.getElementById('btn-1');
const volumeButton = document.getElementById('btn-2');
const resetButton = document.getElementById('btn-3');

surfaceButton.addEventListener('click', calculateSurface);
volumeButton.addEventListener('click', calculateVolume);
resetButton.addEventListener('click', resetField);

function calculateSurface() {
    const radius = parseFloat(radiusInput.value);
    if (!isNaN(radius) && (radius > 0)) {
        const surfaceArea = 4 * 3.14 * radius * radius;
        surfaceInput.value = surfaceArea;
    }
    else {
        alert('Invilid ! value please enter a vlid value ');
    }
}
function calculateVolume() {
    const radius = parseFloat(radiusInput.value);
    if (!isNaN(radius) && (radius > 0)) {
        const volume = (4 / 3) * 3.14 * radius * radius * radius;
        volumeInput.value = volume;
    } else {
        alert('Invilid ! value please enter a vlid value ');
    }
}
function resetField() {
    surfaceInput.value = '';
    radiusInput.value = '';
    volumeInput.value = '';
}