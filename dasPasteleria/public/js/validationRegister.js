window.addEventListener('load', function(){
    
    let formulario = document.querySelector('form.form')
        formulario.addEventListener('submit', function(e){
    
     let errores =[]
     let regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
     let acceptedExtentions = [".jpg", ".png", ".jpeg", ".gif"] 
    
            let campoNombre = document.querySelector('.user_name')
            let campoEmail = document.querySelector('.email')
            let campoUserPassword = document.querySelector('.user_password')
            let campoRepeatPassword = document.querySelector('.repeat_password')
            let avatar = document.querySelector('.avatar')
            let terminosCondiciones = document.querySelector('.aceptoTerminosCondiciones')
            
            
            if(campoNombre.value == ""){
                errores.push('El campo nombre no debe estar vacio')
            }else if(campoNombre.value.length < 3){
                errores.push('El campo nombre debe conteneder al menos 3 caracteres')
            }
    
            if(campoEmail.value == ""){
                errores.push('El campo email no debe estar vacio')
            }else if(!regex.test(campoEmail.value)){
                errores.push('el campo email no es un formato de email')
            }
            if(campoUserPassword.value == ""){
                errores.push('El campo Password no debe estar vacio')
            }else if(campoUserPassword.value.length < 8){
                errores.push('la contraseña debe ser mayor a 8 caracteres')
            }
            if(campoRepeatPassword.value == ""){
                errores.push('Debe repetir su contraseña')
            }else if(campoUserPassword.value != campoRepeatPassword.value ){
                errores.push('las contraseñas no coinciden')
            }
            
            let extension = avatar.value.substring(avatar.value.lastIndexOf('.')).toLowerCase()
    
            if(avatar.value && !acceptedExtentions.includes(extension)){
                errores.push(`La extension del archivo debe ser de tipo ${acceptedExtentions.join(",")}`)
            }
    
          if(!terminosCondiciones.cheked){
            errores.push('Debes aceptar los terminos y condiciones')
          }
    
         
       if(errores.length > 0){
        e.preventDefault();
        let ulErrores= document.querySelector('section.errores ul')
        for (let i = 0; i< errores.length; i++) {
            ulErrores.innerHTML += '<li>'+ errores[i]+ '</li>'
           
        }
    
    }
    
        })
    })