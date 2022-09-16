window.addEventListener('load', function(){
    const campoProductName = document.querySelector("[name=product_name]");
    const campoDescription = document.querySelector("[name=product_description]");
    const campoImage = document.querySelector("[name=image]");    
    const campoSmallPrice = document.querySelector("[name=small_price]");
    const campoBigPrice = document.querySelector("[name=big_price]");

    
   const validateFieldName = (e) => {
      const field = e.target;
       const fieldValue = e.target.value;
       if (fieldValue.trim().length == 0) {
         field.classList.add("invalid");
         field.nextElementSibling.classList.add ("text-danger");
         field.nextElementSibling.innerText= `El campo ${field.placeholder} no debe estar vacio`;
       } else if (fieldValue.trim().length < 5) {
       field.classList.add("invalid");
       field.nextElementSibling.classList.add ("text-danger");
       field.nextElementSibling.innerText= `El campo ${field.placeholder} debe tener al menos 5 caracteres`;
       } else {
        field.classList.remove("invalid");
        field.nextElementSibling.classList.remove ("text-danger");
        field.nextElementSibling.innerText= "";
       }
   }

   const validateFieldDescription = (e) => {
    const field = e.target;
     const fieldValue = e.target.value;
     if (fieldValue.trim().length == 0) {
       field.classList.add("invalid");
       field.nextElementSibling.classList.add ("text-danger");
       field.nextElementSibling.innerText= `El campo ${field.placeholder} no debe estar vacio`;
     } else if (fieldValue.trim().length < 20) {
     field.classList.add("invalid");
     field.nextElementSibling.classList.add ("text-danger");
     field.nextElementSibling.innerText= `El campo ${field.placeholder} debe tener al menos 20 caracteres`;
     } else {
      field.classList.remove("invalid");
      field.nextElementSibling.classList.remove ("text-danger");
      field.nextElementSibling.innerText= "";
     }
 }

 const validateFieldImage = (e) => {
    const field = e.target;  
    const fileExt = e.target.files[0].name.split(".").pop().toLowerCase();
    const allowExt = ["jpg", "png", "jpeg", "gif"];
    if(!fileExt){
     field.classList.add("invalid");
     field.nextElementSibling.classList.add ("text-danger");
     field.nextElementSibling.innerText= 'Debes subir una imagen del producto'
    }else if (!allowExt.includes(fileExt)) {
     field.classList.add("invalid");
     field.nextElementSibling.classList.add ("text-danger");
     field.nextElementSibling.innerText= `La extensión del archivo debe ser de tipo ${allowExt.join(", ")}`;
    } else {
      field.classList.remove("invalid");
      field.nextElementSibling.classList.remove ("text-danger");
      field.nextElementSibling.innerText= "";
      }   
 }

   const validateFieldPrice = (e) =>{
    const field = e.target;
    const fieldValue = e.target.value;
    if (fieldValue.trim().length == 0) {
      field.classList.add("invalid");
      field.nextElementSibling.classList.add ("text-danger");
      field.nextElementSibling.innerText= 'El campo precio no debe estar vacio';
    // } else if (!fieldValue.trim().length < 5) {
    // field.classList.add("invalid");
    // field.nextElementSibling.classList.add ("text-danger");
    // field.nextElementSibling.innerText= 'El campo precio debe ser numérico';
    } else {
     field.classList.remove("invalid");
     field.nextElementSibling.classList.remove ("text-danger");
     field.nextElementSibling.innerText= "";
    }
}

campoProductName.addEventListener("blur", validateFieldName);
campoDescription.addEventListener("blur", validateFieldDescription);
campoImage.addEventListener("change", validateFieldImage);
campoSmallPrice.addEventListener("blur", validateFieldPrice);
campoBigPrice.addEventListener("blur", validateFieldPrice);


})