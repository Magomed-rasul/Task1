// Акардеон------------------------------------------
const blocks = document.querySelectorAll('.question');

blocks.forEach(block => {
  const question__header = block.querySelector('.question__header');
  
  question__header.addEventListener('click', () => {
    block.classList.toggle('active');
  });
}); 


// Модульные окна --------------------------------------

//Открытие по нажатию конпки sing
document.getElementById('open-sing').addEventListener('click', function() {
  document.getElementById('sing').classList.add("open")
});


//закрытие по нажатию 'X'
document.getElementById('close-sing').addEventListener('click', function() {
  document.getElementById('sing').classList.remove("open")
});


//Открытие по нажатию конпки Register
document.getElementById('open-reg').addEventListener('click', function() {
  document.getElementById('reg').classList.add("open")
});

//закрытие по нажатию 'X'
document.getElementById('close-reg').addEventListener('click', function() {
  document.getElementById('reg').classList.remove("open")
});


// Кнопка show на пароле--------------------------------------------------------
  function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    var togglePasswordButtons = document.querySelectorAll(".toggle-password");

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      togglePasswordButtons.forEach(function(button) {
        button.classList.add("show");
      });
    } else {
      passwordInput.type = "password";
      togglePasswordButtons.forEach(function(button) {
        button.classList.remove("show");
      });
    }
  }



  // Input Галерея
  var loadFile = function(event) {
    var output = document.createElement('img'); 
    output.src = URL.createObjectURL(event.target.files[0]);
    
    output.onload = function() {
      URL.revokeObjectURL(output.src) 
    }
    document.getElementById('image-container').appendChild(output); 

  };

//  Крестик на изображении, (Он не отображается)
  document.addEventListener('click', function(event) {
  if (event.target.matches('#image-container img:after')) { 
    event.target.parentNode.remove(); 
  }
});