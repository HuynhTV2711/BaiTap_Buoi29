// Xử lí các select chọn loại người dùng
const chonNguoiDung = () => {
    if (document.getElementById("nguoiDung").value == "Sinh viên") {
      document.querySelector(".colDiemToan").style.display = "block";
      document.querySelector(".colDiemLy").style.display = "block";
      document.querySelector(".colDiemHoa").style.display = "block";
      document.querySelector(".colSoNgayLamViec").style.display = "none";
      document.querySelector(".colLuongTheoNgay").style.display = "none";
      document.querySelector(".colDanhGia").style.display = "none";
      document.querySelector(".colTenCongTy").style.display = "none";
    } else if (document.getElementById("nguoiDung").value == "Employee") {
      document.querySelector(".colSoNgayLamViec").style.display = "block";
      document.querySelector(".colLuongTheoNgay").style.display = "block";
      document.querySelector(".colDiemToan").style.display = "none";
      document.querySelector(".colDiemLy").style.display = "none";
      document.querySelector(".colDiemHoa").style.display = "none";
      document.querySelector(".colDanhGia").style.display = "none";
      document.querySelector(".colTenCongTy").style.display = "none";
    } else if (document.getElementById("nguoiDung").value == "Customer") {
      document.querySelector(".colDiemToan").style.display = "none";
      document.querySelector(".colDiemLy").style.display = "none";
      document.querySelector(".colDiemHoa").style.display = "none";
      document.querySelector(".colSoNgayLamViec").style.display = "none";
      document.querySelector(".colLuongTheoNgay").style.display = "none";
      document.querySelector(".colDanhGia").style.display = "block";
      document.querySelector(".colTenCongTy").style.display = "block";
    } else {
      document.querySelector(".colDiemToan").style.display = "none";
      document.querySelector(".colDiemLy").style.display = "none";
      document.querySelector(".colDiemHoa").style.display = "none";
      document.querySelector(".colSoNgayLamViec").style.display = "none";
      document.querySelector(".colLuongTheoNgay").style.display = "none";
      document.querySelector(".colDanhGia").style.display = "none";
      document.querySelector(".colTenCongTy").style.display = "none";
    }
  };
  document.querySelector("#nguoiDung").onclick = chonNguoiDung;