function TTDG() {

    var name = document.forms["form_DG"]["name"].value;
    var idCard = document.forms["form_DG"]["id_card"].value;
    var tel = document.forms["form_DG"]["tel"].value;
    var email = document.forms["form_DG"]["E_mail"].value;
    var customerType = document.getElementById("Choose").value;
    var invoiceId = document.forms["form_DG"]["id_HD"].value;
    var description = document.forms["form_DG"]["description"].value;
  
    if (name === "" || idCard === "" || tel === "" || email === "" || customerType === "" || invoiceId === "" || description === "") {
      alert("Vui lòng điền đầy đủ thông tin!");
      return;
    }
  
    alert("Cảm ơn bạn đã gửi góp ý của mình!");
  
    document.forms["form_DG"]["name"].value = "";
    document.forms["form_DG"]["id_card"].value = "";
    document.forms["form_DG"]["tel"].value = "";
    document.forms["form_DG"]["E_mail"].value = "";
    document.getElementById("Choose").value = "";
    document.forms["form_DG"]["id_HD"].value = "";
    document.forms["form_DG"]["description"].value = "";
  }