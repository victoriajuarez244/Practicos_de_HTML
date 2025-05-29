function validacion(event) {
    event.preventDefault(); 

    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();

    let isValid = true;

    
    if (name === '') {
        isValid = false;
    }

   
    if (email === '') {
        isValid = false;
    }

    if (isValid) {
        alert('Formulario enviado correctamente!');
        document.getElementById('myForm').reset(); 
    }

    return isValid;
}