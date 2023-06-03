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