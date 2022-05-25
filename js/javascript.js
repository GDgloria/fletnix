$.getJSON("php/pellicules_list.php", function(pellicules){
  console.log(pellicules);


  for (n=0; n<pellicules.length; n++){

    var estrelles = "";
    if (pellicules[n]["puntuacio"] == 0){
      estrelles = "<img src=img/stars/star_off.png><img src=img/stars/star_off.png><img src=img/stars/star_off.png><img src=img/stars/star_off.png><img src=img/stars/star_off.png>";
    }else if (pellicules[n]["puntuacio"] == 1) {
      estrelles = "<img src=img/stars/star_half.png><img src=img/stars/star_off.png><img src=img/stars/star_off.png><img src=img/stars/star_off.png><img src=img/stars/star_off.png>";
    }else if (pellicules[n]["puntuacio"] == 2) {
      estrelles = "<img src=img/stars/star_on.png><img src=img/stars/star_off.png><img src=img/stars/star_off.png><img src=img/stars/star_off.png><img src=img/stars/star_off.png>";
    }else if (pellicules[n]["puntuacio"] == 3) {
      estrelles = "<img src=img/stars/star_on.png><img src=img/stars/star_half.png><img src=img/stars/star_off.png><img src=img/stars/star_off.png><img src=img/stars/star_off.png>";
    }else if (pellicules[n]["puntuacio"] == 4) {
      estrelles = "<img src=img/stars/star_on.png><img src=img/stars/star_on.png><img src=img/stars/star_off.png><img src=img/stars/star_off.png><img src=img/stars/star_off.png>";
    }else if (pellicules[n]["puntuacio"] == 5) {
      estrelles = "<img src=img/stars/star_on.png><img src=img/stars/star_on.png><img src=img/stars/star_half.png><img src=img/stars/star_off.png><img src=img/stars/star_off.png>";
    }else if (pellicules[n]["puntuacio"] == 6) {
      estrelles = "<img src=img/stars/star_on.png><img src=img/stars/star_on.png><img src=img/stars/star_on.png><img src=img/stars/star_off.png><img src=img/stars/star_off.png>";
    }else if (pellicules[n]["puntuacio"] == 7) {
      estrelles = "<img src=img/stars/star_on.png><img src=img/stars/star_on.png><img src=img/stars/star_on.png><img src=img/stars/star_half.png><img src=img/stars/star_off.png>";
    }else if (pellicules[n]["puntuacio"] == 8) {
      estrelles = "<img src=img/stars/star_on.png><img src=img/stars/star_on.png><img src=img/stars/star_on.png><img src=img/stars/star_on.png><img src=img/stars/star_off.png>";
    }else if (pellicules[n]["puntuacio"] == 9) {
      estrelles = "<img src=img/stars/star_on.png><img src=img/stars/star_on.png><img src=img/stars/star_on.png><img src=img/stars/star_on.png><img src=img/stars/star_half.png>";
    }else{
      estrelles = "<img src=img/stars/star_on.png><img src=img/stars/star_on.png><img src=img/stars/star_on.png><img src=img/stars/star_on.png><img src=img/stars/star_on.png>";
    }

    document.getElementById('llistat_pellicules').innerHTML +=
    "<article class=peli>"+
      "<h2>"+pellicules[n]["titol"]+"</h2>"+
      "<a href='video.html'><img class=covers src=img/covers/"+pellicules[n]["image"]+".jpg></a>"+
      "<h1 id=director>"+pellicules[n]["director"]+"</h1>"+
      "<p>"+pellicules[n]["any"]+"</p>"+
      "<p>"+pellicules[n]["pais"]+"</p>"+
      "<p class=estrelles>"+estrelles+"</p>"+
      "<a href='https://www.google.com/search?q="+pellicules[n]["titol"]+" "+["director"]+"'><img src=img/icons/google.png></a>"
    "</article>";
  }

});
