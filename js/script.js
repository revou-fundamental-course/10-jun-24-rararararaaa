function konversi() {
    let celcius = parseFloat(document.getElementById("celcius").value);
    if (isNaN(celcius)) {
        alert("Silakan masukkan nilai Celcius yang valid.");
        return;
    }
    let fahrenheit = (celcius * 9/5) + 32;
    document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
    document.getElementById("covert-calculate").value = `${celcius} * (9/5) + 32 = ${fahrenheit.toFixed(2)}`;
}

function reset() {
    document.getElementById("celcius").value = '';
    document.getElementById("fahrenheit").value = '';
    document.getElementById("covert-calculate").value = '';
}

function reverse() {
    let fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
    if (isNaN(fahrenheit)) {
        alert("Silakan masukkan nilai Fahrenheit yang valid.");
        return;
    }
    let celcius = Math.round((fahrenheit - 32) * 5/9);
    document.getElementById("celcius").value = celcius;
    document.getElementById("covert-calculate").value = `${fahrenheit} - 32 * (5/9) = ${celcius}`;
}
