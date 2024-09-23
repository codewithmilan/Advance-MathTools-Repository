const heightInput = document.getElementById('inp-1');
const radiusInput = document.getElementById('inp-2');
const volumeInput = document.getElementById('inp-3');
const surfaceInput = document.getElementById('inp-4');
const surfaceButton = document.getElementById('btn-1');
const volumeButton = document.getElementById('btn-2');
const resetButton = document.getElementById('btn-3');

// Button par click event listener
surfaceButton.addEventListener('click', calculateSurface);
volumeButton.addEventListener('click', calculateVolume);
resetButton.addEventListener('click', resetField);

function calculateSurface() {
    const height = parseFloat(heightInput.value);
    const radius = parseFloat(radiusInput.value);
    if (!isNaN(height) && (height > 0)) {
        const sl = Math.sqrt((radius ** 2 + height ** 2));
        const surfaceArea = 3.14 * radius * (sl + radius);
        surfaceInput.value = surfaceArea;
    }
    else {
        alert('Invilid ! value please enter a vlid value ');
    }
}
function calculateVolume() {
    const height = parseFloat(heightInput.value);
    const radius = parseFloat(radiusInput.value);
    if (!isNaN(height) && (height > 0)) {
        const volume = (1 / 3) * 3.14 * radius * radius * height;
        volumeInput.value = volume;
    } else {
        alert('Invilid ! value please enter a vlid value ');
    }
}
function resetField() {
    surfaceInput.value = '';
    heightInput.value = '';
    volumeInput.value = '';
    radiusInput.value = '';
}