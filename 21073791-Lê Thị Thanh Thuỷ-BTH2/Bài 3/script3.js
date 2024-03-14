function myFunction() {
    // Get the form elements
    var name = document.getElementsByName("ho-ten")[0];
    var email = document.getElementsByName("email")[0];
    var subject = document.getElementsByName("tieu-de")[0];
    var message = document.getElementsByName("noi-dung")[0];
  

    if (name.value === "" || email.value === "" || subject.value === "" || message.value === "") {
      alert("Vui lòng điền đầy đủ thông tin!");
      return;
    }
  
    alert("Cảm ơn bạn đã gửi tin nhắn của mình!");
  
    name.value = "";
    email.value = "";
    subject.value = "";
    message.value = "";
  }