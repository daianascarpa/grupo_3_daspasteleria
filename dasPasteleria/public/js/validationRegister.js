window.addEventListener('load', function(){
    const campoNombre = document.querySelector("[name=user_name]");
    const campoEmail = document.querySelector("[name=email]");
    const campoPassword = document.querySelector("[name=user_password]");
    const campoRepeatPassword = document.querySelector("[name=repeat_password]");
    const avatar = document.querySelector("[name=avatar]");    

    
   const validateFieldName = (e) => {
      const field = e.target;
       const fieldValue = e.target.value;
       if (fieldValue.trim().length == 0) {
         field.classList.add("invalid");
         field.nextElementSibling.classList.add ("text-danger");
         field.nextElementSibling.innerText= `El campo ${field.placeholder} no debe estar vacio`;
       } else if (fieldValue.trim().length < 2) {
       field.classList.add("invalid");
       field.nextElementSibling.classList.add ("text-danger");
       field.nextElementSibling.innerText= `El campo ${field.placeholder} debe tener al menos 2 caracteres`;
       } else {
        field.classList.remove("invalid");
        field.nextElementSibling.classList.remove ("text-danger");
        field.nextElementSibling.innerText= "";
       }
   }

   const validateFieldPassword = (e) => { 
      const field = e.target;
       const fieldValue = e.target.value;
       if (fieldValue.trim().length == 0) {
       field.classList.add("invalid");
       field.nextElementSibling.classList.add ("text-danger");
       field.nextElementSibling.innerText= `El campo ${field.placeholder} no debe estar vacio`;
       } else if (fieldValue.trim().length < 8) {
         field.classList.add("invalid");
         field.nextElementSibling.classList.add ("text-danger");
         field.nextElementSibling.innerText= `El campo ${field.placeholder} debe tener al menos 8 caracteres`;
         } else {
        field.classList.remove("invalid");
        field.nextElementSibling.classList.remove ("text-danger");
        field.nextElementSibling.innerText= "";
       }
   }

   const validateRepeatPassword = (e) => { 
      const field = e.target;
      const fieldValue = e.target.value;
      if (fieldValue.trim().length == 0) {
      field.classList.add("invalid");
      field.nextElementSibling.classList.add ("text-danger");
      field.nextElementSibling.innerText= `El campo ${field.placeholder} no debe estar vacio`;
      } else if (fieldValue.trim().length < 8) {
        field.classList.add("invalid");
        field.nextElementSibling.classList.add ("text-danger");
        field.nextElementSibling.innerText= `El campo ${field.placeholder} debe tener al menos 8 caracteres`;
        } else if (fieldValue != campoPassword.value) {
         field.classList.add("invalid");
         field.nextElementSibling.classList.add ("text-danger");
         field.nextElementSibling.innerText= `El campo ${field.placeholder} y Contraseña deben ser iguales`;
         } else {
           field.classList.remove("invalid");
           field.nextElementSibling.classList.remove ("text-danger");
           field.nextElementSibling.innerText= "";
           }
   }

   const validateFieldEmail = (e) =>{
        const field = e.target;
        const fieldValue = e.target.value;
        const regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/); 
        if (fieldValue.trim().length == 0) {
         field.classList.add("invalid");
         field.nextElementSibling.classList.add ("text-danger");
         field.nextElementSibling.innerText= `El campo ${field.placeholder} no debe estar vacio`;}
         else if (fieldValue.trim().length > 0 && !regex.test(fieldValue)) {
       field.classList.add("invalid");
       field.nextElementSibling.classList.add ("text-danger");
       field.nextElementSibling.innerText= "Debe ingresar un email válido";
       } else {
        field.classList.remove("invalid");
        field.nextElementSibling.classList.remove ("text-danger");
        field.nextElementSibling.innerText= "";
       }
   }

   const validateFieldAvatar = (e) => {
      const field = e.target;  
      const fileExt = e.target.files[0].name.split(".").pop().toLowerCase();
      const allowExt = ["jpg", "png", "jpeg", "gif"];
      if (!allowExt.includes(fileExt)) {
       field.classList.add("invalid");
       field.nextElementSibling.classList.add ("text-danger");
       field.nextElementSibling.innerText= `La extensión del archivo debe ser de tipo ${allowExt.join(", ")}`;
      } else {
        field.classList.remove("invalid");
        field.nextElementSibling.classList.remove ("text-danger");
        field.nextElementSibling.innerText= "";
        }   
   }


campoNombre.addEventListener("blur", validateFieldName);
campoEmail.addEventListener("blur", validateFieldEmail);
campoPassword.addEventListener("blur", validateFieldPassword);
campoRepeatPassword.addEventListener("blur", validateRepeatPassword);
avatar.addEventListener("change", validateFieldAvatar);

})

  