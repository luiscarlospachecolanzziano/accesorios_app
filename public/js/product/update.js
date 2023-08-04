window.addEventListener('load', function () {
    
     // validacion del frontend

    let form = document.querySelector('form')
    form.addEventListener('submit', function (e) {
        
        let name = document.getElementById('name').value
        let Category = document.getElementById('Category').value
        
        let img = document.getElementById('imgCel').value
        
        let errors = []

        if(name.length < 5){
            e.preventDefault()
            errors.push('El nombre debe tener al menos 5 caracteres')
        }
        if(Category == ''){
            e.preventDefault()
            errors.push('Seleccione una categoría') 
        }
    
        if(img != ''){
            let arrImg=img.split('.')
            let extension=arrImg[arrImg.length-1]
            let validExtension=['jpg','png','jpeg','gif']
            if(validExtension.indexOf(extension)==-1){
                errors.push('La extensión de la imagen no es valida, solo se aceptan las siguientes extensiones: jpg, png, jpeg, gif')
                e.preventDefault()
            }
        }

        if(errors.length > 0){
            document.querySelector('.errorsList').innerHTML = ''
            errors.forEach(error => {
                document.querySelector('.errorsList').innerHTML += '<div class="error">'+ error + '</div>'
            });
        }
        
    })

})