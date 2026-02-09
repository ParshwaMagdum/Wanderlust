let taxSwitch = document.getElementById("switchCheckDefault");

if (taxSwitch) {
    taxSwitch.addEventListener("change", () => {
        document.body.classList.toggle("show-tax", taxSwitch.checked);
    });
}
