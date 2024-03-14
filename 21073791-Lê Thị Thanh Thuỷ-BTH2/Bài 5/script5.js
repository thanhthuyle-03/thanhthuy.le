var passwordField = document.getElementById('passwordField');
var questionShown = false; 
passwordField.addEventListener('input', function() {
  if (!questionShown && passwordField.value !== '') {
    var showPassword = confirm('Bạn muốn hiện mật khẩu?');
    questionShown = true; 
    if (showPassword) {
      passwordField.type = 'text'; 
    } else {
      passwordField.type = 'password'; 
    }
  }
});
