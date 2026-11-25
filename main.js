async function loadComponent(id, file) {
    try {
        const response = await fetch(file);

        if (!response.ok) {
            throw new Error(`Failed to load ${file}`);
        }

        const html = await response.text();

        document.getElementById(id).innerHTML = html;

    } catch (error) {
        console.error(error);
    }
}

loadComponent("header", "header.html");
loadComponent("footer", "footer.html");