window.addEventListener("load",function(){
    //Aqui va tod el codigo que se ejecuta despues de cargar la pagina

    formulario = this.document.getElementById("formulario");

    formulario.addEventListener("submit", function(){
        event.preventDefault();
        let nombre = document.getElementById("nombre").value;
        let pass = document.getElementById("pwd").value;
        let respuesta = document.getElementById("result");

        if(nombre=="g7s21" && pass=="si se puede"){
            respuesta.innerText="se acepto el ingreso a el sistema..."
            respuesta.style.color="blue";
            respuesta.style.fontSize="3em";
            respuesta.style.width="500px";
            respuesta.style.height="80px";
            respuesta.style.backgroundColor="white";
        }else{
            respuesta.innerText="Estas mal de la cabeza...."
            respuesta.style.color="red";
            respuesta.style.fontSize="2em";
            respuesta.style.width="500px";
            respuesta.style.height="150px";
            respuesta.style.backgroundColor="cyan";
        }

    });
})