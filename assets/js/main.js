document.getElementById("contact-form").addEventListener("submit", async function(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const response = await fetch(form.action, {
        method: form.method,
        body: formData
    });

    if (response.ok) {
        document.getElementById("form-success").style.display = "block";
        document.getElementById("form-error").style.display = "none";
        form.reset();
    } else {
        document.getElementById("form-success").style.display = "none";
        document.getElementById("form-error").style.display = "block";
    }
});
