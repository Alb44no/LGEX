function sosRequest() {
    // Verifica se o usuário está em um dispositivo móvel
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        window.location.href = "tel:+351936752249"; // Liga diretamente para o número
    } else {
        // Exibe o alerta personalizado na versão web
        document.getElementById("customAlert").style.display = "block";
    }
}

function closeCustomAlert() {
    document.getElementById("customAlert").style.display = "none";
}