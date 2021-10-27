//Mes titres de section à gauche
let liTitle = document.querySelectorAll(".wrapperLeft ul li");
//Mes sections à droite avec leur classe
let itemElem = document.querySelectorAll(".item");

// je fais le tour de mes li 
for (var i = 0; i < liTitle.length; i++) {
  liTitle[i].addEventListener("click", function() {
    // Au click sur un des li je retire la class "active" au autres si il y en a une
    liTitle.forEach(function(li) {
      li.classList.remove("active");
    });
    // et j'ajoute la classe active sur celui sur lequel j'ai cliqué (obj en cours : this)
    this.classList.add("active");
    //je recup mes valeurs de li (mes noms)
    var liVal = this.getAttribute("data-li");
    // Mes sections de droite ont un display = none
    itemElem.forEach(function(item) {
      item.style.display = "none";
    });
    // Mais au click sur le li display = block
    if (liVal == "goal") {
      document.querySelector("." + liVal).style.display = "block";
    } else if (liVal == "content") {
      document.querySelector("." + liVal).style.display = "block";
    } else if (liVal == "where") {
      document.querySelector("." + liVal).style.display = "block";
    } else if (liVal == "who") {
      document.querySelector("." + liVal).style.display = "block";
    }else if (liVal == "howmanytime") {
      document.querySelector("." + liVal).style.display = "block";
    }else if (liVal == "howmuch") {
      document.querySelector("." + liVal).style.display = "block";
    }else if (liVal == "contact") {
      document.querySelector("." + liVal).style.display = "block";
    }else {
      console.log("solve it!");
    }
  });
}