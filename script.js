let personas = {

    vilma: {
        name: "Vilma",
        photo: "img/vilma.gif"
     
    },

    louis: {
        name: "Louis",
        photo: "img/louis.gif"
     
    } ,

    sonia: {
        name: "Sonia",
        photo: "img/sonia.gif"
     
    },

    peggy: {
      name: "Peggy",
      photo: "img/peggy.gif"
   
  } 
}

//vilma
document.querySelector('.vilmaname').innerHTML = personas.vilma.name
document.querySelector(".vilma-image").setAttribute("src",personas.vilma.photo)

//louis
document.querySelector('.louisname').innerHTML = personas.louis.name
document.querySelector(".louis-image").setAttribute("src",personas.louis.photo)

//sonia
document.querySelector('.sonianame').innerHTML = personas.sonia.name
document.querySelector(".sonia-image").setAttribute("src",personas.sonia.photo)

//peggy
document.querySelector('.peggyname').innerHTML = personas.peggy.name
document.querySelector(".peggy-image").setAttribute("src",personas.peggy.photo)


function displayText() {
  var text = document.getElementById("textField");

  if (text.style.display === "none" || text.style.display === "") {
      text.style.display = "block";
  } else {
      text.style.display = "none";
  }
}

function displayText2() {
  var text = document.getElementById("textField1");

  if (text.style.display === "none" || text.style.display === "") {
      text.style.display = "block";
  } else {
      text.style.display = "none";
  }
}

function displayText3() {
  var text = document.getElementById("textField2");

  if (text.style.display === "none" || text.style.display === "") {
      text.style.display = "block";
  } else {
      text.style.display = "none";
  }
}

function displayText4() {
  var text = document.getElementById("textField3");

  if (text.style.display === "none" || text.style.display === "") {
      text.style.display = "block";
  } else {
      text.style.display = "none";
  }
}