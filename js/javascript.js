$.getJSON("php/pellicules_list.php", function(pellicules){
  console.log(pellicules);

  
  for (n=0; n<pellicules.length; n++){

    var estrelles = "";
    if (pellicules[n]["puntuacio"] == 0){
      estrelles = "<img src=img/stars/star_off.png><img src=img/stars/star_off.png><img src=img/stars/star_off.png><img src=img/stars/star_off.png><img src=img/stars/star_off.png>";
    }else if (pellicules[n]["puntuacio"] == 1) {
      estrelles = "<img src=img/stars/star_half.png><img src=img/stars/star_off.png><img src=img/stars/star_off.png><img src=img/stars/star_off.png><img src=img/stars/star_off.png>";
    }else{
      estrelles = "<img src=img/stars/star_on.png><img src=img/stars/star_on.png><img src=img/stars/star_on.png><img src=img/stars/star_on.png><img src=img/stars/star_on.png>";
    }



    document.getElementById('llistat_pellicules').innerHTML +=
    "<article class=peli>"+
      "<h2>"+pellicules[n]["titol"]+"</h2>"+
      "<img src=img/covers/"+pellicules[n]["image"]+".jpg>"+
      "<h1>"+pellicules[n]["director"]+"</h1>"+
      "<p>"+pellicules[n]["any"]+"</p>"+
      "<p>"+pellicules[n]["pais"]+"</p>"+
      "<p class=estrelles>"+estrelles+"</p>"+
    "</article>";
  }

});
