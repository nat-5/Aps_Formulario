function IMC(elEvento){
    elEvento.preventDefault();

    
    var peso = document.querySelector("#Peso1").value;
    var altura =document.querySelector("#Alturamts").value;
    var boton = document.querySelector("#boton");
    var respuestas = document.querySelector("#respuestas");
    

    var formula = peso/(altura*altura);

    
    if(formula < 18.5){
        respuestas.innerHTML = '<h3>"Tu IMC indica que tienes peso Saludable"</h3>'
    } else if (formula >18.5 & formula< 24.9){
        respuestas.innerHTML = '<h3>"Tu IMC indica que tienes Bajo peso"</h3>'
    } else if (formula >18.5 & formula< 16){
        respuestas.innerHTML = '<h3>"Tu IMC indica que tienes peso normal"</h3>'
    }else if (formula > 25 & formula< 29.9){
        respuestas.innerHTML = '<h3>"Tu IMC indica que tienes Sobrepeso"</h3>'
    }else if (formula >=30){
        respuestas.innerHTML = '<h3>"Tu IMC indica que tienes Obsesidad"</h3>'
    }else if (formula >18.5 & formula< 40){
        respuestas.innerHTML = '<h3>"Tu IMC indica que tienes obesidad de alto riesgo "</h3>'
    }
    
}

var boton = document.querySelector("#boton");
boton.addEventListener("submit",IMC)
