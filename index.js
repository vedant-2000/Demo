
function scrollToDiv(divId) {
    
    var div = document.getElementById(`#${divId}`);
    console.log(div)    
    if (div) {
      div.scrollIntoView({ behavior: 'smooth' });
    }
  }

  var myButton = document.getElementById('login');
  myButton.addEventListener('click', function() {
    // Redirect to another page
    window.location.href = './login.html'; // Replace with your desired URL
  });
  document.getElementById('loginBtn').addEventListener('click', function () {
    console.log("her")
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('signupForm').style.display = 'none';
    this.classList.add('active');
    document.getElementById('signupBtn').classList.remove('active');
  });

  document.getElementById('signupBtn').addEventListener('click', function () {
    console.log("her")
    document.getElementById('signupForm').style.display = 'block';
    document.getElementById('loginForm').style.display = 'none';
    this.classList.add('active');
    document.getElementById('loginBtn').classList.remove('active');
  });