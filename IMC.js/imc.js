   



   let peso= parseFloat(prompt("informe seu peso:        "))
   let altura=parseFloat(prompt("informe sua altura      "))
     if (isNaN(peso) || isNaN (altura)||peso <=0 || altura <=0 ) {
        document.write("por favor informe valores validos!!!");

     }else{
        let imc = (peso/(altura*altura)).toFixed(2)
        document.write("o seu imc é igual a: ", imc);
        document.write("<br>")
      if(imc >=18 && imc <=24.9){
        document.write ("peso ideal")
      } else if(imc>25 && imc <=28){

document.write ("peso ideal")
      }




     }