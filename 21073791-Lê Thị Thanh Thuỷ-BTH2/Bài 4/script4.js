function tinhBMI() {
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);
    
      if (isNaN(weight) || isNaN(height)) {
        alert("Vui lòng nhập cân nặng và chiều cao hợp lệ.");
        return;
    }
  
    var bmi = weight / (height * height);
    var bmiCategory = "";

    if (bmi < 18.5) {
        bmiCategory = "Thiếu cân";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        bmiCategory = "Bình thường";
    } else if (bmi >= 25.0 && bmi <= 29.9) {
        bmiCategory = "Thừa cân";
    } else if (bmi >= 30.0 && bmi <= 34.9) {
        bmiCategory = "Béo phì cấp độ I<br>Khám định kỳ";
    } else if (bmi >= 35.0 && bmi <= 39.9) {
        bmiCategory = "Béo phì cấp độ II<br>Tập thể dục thường xuyên";
    } else {
        bmiCategory = "Béo phì cấp độ III<br>Hạn chế ăn mỡ động vật";
    }

    document.getElementById('ketqua').innerHTML =
  "<span style='color: blue'>" + bmi.toFixed(2) + "</span>" + "<br>" + bmiCategory;;
}
