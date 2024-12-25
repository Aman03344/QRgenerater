document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("input");
    const qrImage = document.getElementById("qrImage");

    // Event listener for input change (live preview)
    input.addEventListener("input", () => {
        const inputValue = input.value.trim();

        if (!inputValue) {
            qrImage.style.display = "none"; // Hide QR code if input is empty
            return;
        }

        // Construct the QR code API URL without color customization
        const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(inputValue)}`;

        // Set the QR code image source to the API URL
        qrImage.src = qrApiUrl;
        qrImage.alt = "Generated QR Code";
        qrImage.style.display = "block"; // Show the QR code image
    });
});
