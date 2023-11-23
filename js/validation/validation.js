function checkEmptyValue(value, spanId) {
    // Kiểm tra dữ liệu từ người dùng
    if (value == '') {
      // document.querySelectorAll(".sp-thongbao").style.display = "block";
      document.getElementById(spanId).innerHTML = 'Vui lòng không bỏ trống';
      return false;
    } else {
      // document.querySelectorAll(".sp-thongbao").style.display = "block";
      document.getElementById(spanId).innerHTML = '';
      return true;
    }
  }
  
  function checkEmailValue(value, spanId) {
    var regexEmail =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    // sử dụng phương thức test để kiểm tra dữ liệu đầu vào có thoả chuỗi regex hay không
    regexEmail.test(value); // true , dữ liệu không thoả ==> false
    if (regexEmail.test(value)) {
      // dữ liệu thoả regex
      // document.querySelectorAll(".sp-thongbao").style.display = "block";
      document.getElementById(spanId).innerHTML = '';
      return true;
    } else {
      // document.querySelectorAll(".sp-thongbao").style.display = "block";
      document.getElementById(spanId).innerHTML =
        'Định dạng email không chính xác';
      return false;
    }
  }
  // Kiểm tra dữ liệu nhập vào là chữ cái
  function checkTextValue(value, spanId){
    let result = /^[a-zA-Z ]+$/.test( value);
    if (result) {
      // dữ liệu thoả regex
      document.getElementById(spanId).innerHTML = '';
      return true;
    } else {
      document.getElementById(spanId).innerHTML =
        'Định dạng tên nhân viên chỉ chứa chữ cái không dấu';
      return false;
    }
  }

  // Kiểm tra điểm
 function checkDiem(value, spanId, min, max){
    if (value >= min && value <= max) {
      document.getElementById(spanId).innerHTML = '';
      return true;
    }else {
      document.getElementById(spanId).innerHTML =
        'Điểm nằm trong khoảng 0 - 10';
      return false;
    }
  }
  // Kiểm tra số ngày làm
  function checkNgayLam(value, spanId, min, max){
    if (value >= min && value <= max) {
      document.getElementById(spanId).innerHTML = '';
      return true;
    }else {
      document.getElementById(spanId).innerHTML =
        'Ngày làm nằm trong khoảng 1 - 30';
      return false;
    }
  }
  // Kiểm tra lương cơ bản
  function checkLuong(value, spanId, min, max){
    if (value >= min && value <= max) {
      document.getElementById(spanId).innerHTML = '';
      return true;
    }else {
      document.getElementById(spanId).innerHTML =
        'Lương nằm trong khoảng 100.000 - 5.000.000';
      return false;
    }
  }
