function verificacio(){

 //Email   
    var regEx = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
    if(regEx.test(document.getElementById('inputEmail').value)){
        document.getElementById('inputEmail').classList.add("is-valid");
        }else{
    
            document.getElementById('inputEmail').classList.add("is-invalid");
            alert("Introdueix una adreça electrònica vàlida")
            }
            
//Validació contrasenya

            if(document.getElementById('contra1').value!=document.getElementById('contra2').value){
                document.getElementById('contra2').classList.add("is-invalid"); 
                alert("Contrasenya incorrecta");
            }    
 }

        //Cerca
        
function cerca() {
    if(document.getElementById('inputCerca').value.length<3){
        document.getElementById('inputCerca').classList.add("is-invalid");  
        alert("Introdueix una paraula de com a mínim 3 caràcters.");
        
        }
    
    }
