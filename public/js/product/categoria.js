window.addEventListener('load', function () {

    let CategorySelect = document.getElementById('Category')
    fetch('https://accesoriosapp-production.up.railway.app/api/categories')
        .then(response => response.json())
        .then(categories => {

            categories.forEach(element => {
                CategorySelect.innerHTML +=
                    `<option value="${element.id}">${element.name}</option>`
            });

        });
    // validacion del frontend

    let form = document.querySelector('form')
    form.addEventListener('submit', function (e) {
        e.preventDefault();

    })

})