function getInfo() {
    fetch("https://randomuser.me/api/")
        .then(response => response.json())
        .then(data => 
           process(data)
        )

};

function process(user){
   const button = document.getElementsByClassName('btn');
   const nameInfo = user.results[0].name;
   const fullName = `${nameInfo.title} ${nameInfo.first} ${nameInfo.last}`;
   const email = user.results[0].email;
   const birthDate = user.results[0].dob.date;
   const birthDay = birthDate.slice(0 , birthDate.length -14)
   const location = `${user.results[0].location.street.number} ${user.results[0].location.street.name}`;
   const phone = user.results[0].phone;
   const password = user.results[0].login.password;
   document.getElementById('textBoxOne').innerText = fullName;
   document.getElementById('textBoxTwo').innerText = 'My name is';
   document.getElementById('img-src').src = user.results[0].picture.large;

   //button functionality
   for (let i = 0; i < button.length; i++) {
      button[i].addEventListener('mouseover', function (){

         var current = document.getElementsByClassName("active");
         current[0].className = current[0].className.replace(" active", "");
         this.className += " active";

         if(button[i].innerHTML == '<i class="fa-solid fa-user"></i>'){
            document.getElementById('textBoxOne').innerText = fullName;
            document.getElementById('textBoxTwo').innerText = 'Hi, My name is';
         }
         else if(button[i].innerHTML == '<i class="fa-solid fa-envelope"></i>'){
            document.getElementById('textBoxOne').innerText = email;
            document.getElementById('textBoxTwo').innerText = 'My email is';
         }
         else if(button[i].innerHTML == '<i class="fa-solid fa-calendar"></i>'){
            document.getElementById('textBoxOne').innerText = birthDay;
            document.getElementById('textBoxTwo').innerText = 'My birthday is';
         }
         else if(button[i].innerHTML == '<i class="fa-solid fa-location-dot"></i>'){
            document.getElementById('textBoxOne').innerText = location;
            document.getElementById('textBoxTwo').innerText = 'My address is';
         }
         else if(button[i].innerHTML == '<i class="fa-solid fa-phone"></i>'){
            document.getElementById('textBoxOne').innerText = phone;
            document.getElementById('textBoxTwo').innerText = 'My phone number is';
         }
         else if(button[i].innerHTML == '<i class="fa-solid fa-lock"></i>'){
            document.getElementById('textBoxOne').innerText = password;
            document.getElementById('textBoxTwo').innerText = 'My password is';
         }  
      });
  }
};

getInfo();

document.getElementById("img-div").addEventListener("mouseover", ()=>{
  document.getElementById("reload").style.display = 'block';
   document.getElementById("reload").addEventListener('click', () =>{
      console.log('clicked');
      location.reload();
   })
})

document.getElementById("img-div").addEventListener("mouseout", ()=>{
   document.getElementById("reload").style.display = 'none';
 })


