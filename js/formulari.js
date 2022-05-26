

function valida_nom(){
  	var nom = document.getElementById("nom").value; //recuperem el valor del camp del formulari
  	if (nom.length<49) { //si està buit...
  		document.getElementById("error_titol").innerHTML = "El nom no es vàlid"; //mostrem un missatge d'error
  	}else{ //si no està buit
  		document.getElementById("error_titol").innerHTML = ""; //eliminem el missatge d'error i retornem true
  		return true;
  	}
  }

  function valida_cognom(){
    	var cognom = document.getElementById("cognom").value; //recuperem el valor del camp del formulari
    	if (cognom.length<2) { //si està buit...
    		document.getElementById("error_cognom").innerHTML = "El nom no es vàlid"; //mostrem un missatge d'error
    	}else{ //si no està buit
    		document.getElementById("error_cognom").innerHTML = ""; //eliminem el missatge d'error i retornem true
    		return true;
    	}
    }

    function valida_comanda(){
      	var comanda = document.getElementById("comanda").value; //recuperem el valor del camp del formulari
      	if (comanda == "") { //si està buit...
      		document.getElementById("error_comanda").innerHTML = "Introdueix el número de comanda"; //mostrem un missatge d'error
      	}else if (comanda <0||comanda>9999999){ //si no està buit
      		document.getElementById("error_comanda").innerHTML = "El numero de comanda no es correcte"; //eliminem el missatge d'error i retornem true
        }else{
          document.getElementById("error_comanda").innerHTML = "";
          return true;
      	}
      }
      function valida_online(){
        var online_si=document.getElementById("online_si").checked;
        var online_si=document.getElementById("online_no").checked;
        if (online_si==false && online_no == false){
        document.getElementById("error_online").innerHTML = "Has de marcar una opció";
      }else{
        document.getElementById("error_online").innerHTML = "";
        return true;
    }
  }


  function valida_form(){ //aquesta funció s'executa al enviar el formulari.
  	if (valida_nom() && valida_cognom() && valida_comanda() && valida_online ()){ //si totes les funcions retornen true, el formulari s'envia.
  		alert("validat!");
  		return true;
    }else{ //si no, error i no s'envia
  		valida_nom(); valida_cognom(); valida_comanda(); valida_online ()
  		alert("hi ha errors");
  		return false;
  	}
  }
