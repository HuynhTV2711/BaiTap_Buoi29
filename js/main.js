import ListPerson from "./models/ListPerson.js";
import Student from "./models/Student.js";
import Employee from "./models/Employee.js";
import Customer from "./models/Customer.js";
let personList = new ListPerson();
let student = new Student();
let employee = new Employee();
let customer = new Customer();
console.log(student);
// Hàm lấy dữ liệu người dùng
const getValueUser = () => {
  var isValid = true;
  let arrInput = document.querySelectorAll("form input, form select");
  let arrSmall = document.querySelectorAll("small");
  console.log(arrSmall);
  let dataInput = {};
  for (const index in arrInput) {
    // Vì các input dùng css none để ẩn, nên phải nhập đúng và không để trống vì thế phải gán giá trị để thỏa mản validation
    if (arrInput[index].value == "Sinh viên") {
      document.querySelector("#soNgayLam").value = 30;
      document.querySelector("#luongTheoNgay").value = 1000000;
      document.querySelector("#tenCongTy").value = "cong ty";
    } else if (arrInput[index].value == "Employee") {
      document.querySelector("#tenCongTy").value = "cong ty";
      document.querySelector("#diemToan").value = 0;
      document.querySelector("#diemLy").value = 0;
      document.querySelector("#diemHoa").value = 0;
    } else if (arrInput[index].value == "Customer") {
      document.querySelector("#soNgayLam").value = 30;
      document.querySelector("#luongTheoNgay").value = 1000000;
      document.querySelector("#diemToan").value = 0;
      document.querySelector("#diemLy").value = 0;
      document.querySelector("#diemHoa").value = 0;
    }
    console.log(arrInput[index].value);
    const { id, value } = arrInput[index];
    if (id == "maUser") {
      isValid &= checkEmptyValue(value, arrSmall[index].id);
    } else if (id == "hoTen") {
      isValid &=
        checkEmptyValue(value, arrSmall[index].id) &&
        checkTextValue(value, arrSmall[index].id);
    } else if (id == "email") {
      isValid &=
        checkEmptyValue(value, arrSmall[index].id) &&
        checkEmailValue(value, arrSmall[index].id);
    } else if (id == "diaChi") {
      isValid &= checkEmptyValue(value, arrSmall[index].id);
    } else if (id == "diemToan") {
      isValid &=
        checkEmptyValue(value, arrSmall[index].id) &&
        checkDiem(value, arrSmall[index].id, 0, 10);
    } else if (id == "diemLy") {
      isValid &=
        checkEmptyValue(value, arrSmall[index].id) &&
        checkDiem(value, arrSmall[index].id, 0, 10);
    } else if (id == "diemHoa") {
      isValid &=
        checkEmptyValue(value, arrSmall[index].id) &&
        checkDiem(value, arrSmall[index].id, 0, 10);
    } else if (id == "soNgayLam") {
      isValid &=
        checkEmptyValue(value, arrSmall[index].id) &&
        checkNgayLam(value, arrSmall[index].id, 1, 30);
    } else if (id == "luongTheoNgay") {
      isValid &=
        checkEmptyValue(value, arrSmall[index].id) &&
        checkLuong(value, arrSmall[index].id, 100000, 5000000);
    } else if (id == "tenCongTy") {
      isValid &= checkEmptyValue(value, arrSmall[index].id);
    }
    dataInput[id] = value;
  }
  //
  if (isValid) {
    return dataInput;
  }
};
// Thêm người dùng vào danh sách
let themNguoiDung = () => {
  const dataInput = getValueUser();
  console.log(dataInput);
  if (dataInput.nguoiDung == "Sinh viên") {
    student = dataInput;
    personList.addPerson(student);
  } else if (dataInput.nguoiDung == "Employee") {
    employee = dataInput;
    personList.addPerson(employee);
  } else if (dataInput.nguoiDung == "Customer") {
    customer = dataInput;
    personList.addPerson(customer);
  }
  console.log(personList.arrPersons);
  render();
  luuLocal();
};
window.themNguoiDung = themNguoiDung;

// Hàm render
let render = (arr = personList.arrPersons) => {
  let content = "";
  for (const item of arr) {
    content += `<tr>
    <td>${item.maUser}</td>
    <td>${item.hoTen}</td>
    <td>${item.email}</td>
    <td>${item.diaChi}</td>
    <td>${item.nguoiDung}</td>
    <td>
    ${
      item.nguoiDung == "Sinh viên"
        ? `<div>Điểm toán: ${item.diemToan}</div> <div>Điểm lý: ${
            item.diemLy
          }</div> <div>Điểm hóa:${item.diemHoa}</div><div>Điểm trung bình: ${
            (item.diemToan * 1 + item.diemLy * 1 + item.diemHoa * 1) / 3
          }</div>`
        : item.nguoiDung == "Employee"
        ? `<div>Số ngày làm việc: ${
            item.soNgayLam
          }</div><div>Lương theo ngày: ${
            item.luongTheoNgay
          }</div><div>Lương nhận được là: ${
            item.soNgayLam * 1 * item.luongTheoNgay * 1
          }</div>`
        : `<div>Tên công ty: ${item.tenCongTy}</div><div>Đánh giá: ${item.danhGia}</div>`
    }
    </td>
    <td>
        <button class="btn btn-danger" type="button" onclick="xoaUser('${
          item.maUser
        }')">Xóa</button>
        <button class="btn btn-warning" type="button" onclick ="layThongTinUser('${
          item.maUser
        }')">Sửa</button>
    </td>
  </tr>`;
  }
  document.querySelector("tbody").innerHTML = content;
};
// Hàm xóa user
const xoaUser = (id) => {
  console.log(id);
  personList.xoaUser(id);
  render();
  luuLocal();
};
window.xoaUser = xoaUser;
// Lấy thông tin user đưa lên các ô input
const layThongTinUser = (id) => {
  let user = personList.layThongTin(id);
  const arrInput = document.querySelectorAll("form input,form select");
  for (const item of arrInput) {
    item.value = user[item.id];
    chonNguoiDung();
  }
  document.getElementById("maUser").disabled = true;
};
window.layThongTinUser = layThongTinUser;
// Hàm cập nhật user
const capNhatUser = () => {
  // Lấy dữ liệu mới từ form xuống
  // lấy ra id và tiemf kiếm phần tử trong mảng
  // Sau  khi tìm được id thay thế phần tử cũ bằng phần tử mới
  let user = getValueUser();
  console.log(user);
  personList.capNhatUser(user);
  document.getElementById("maUser").disabled = false;
  render();
  luuLocal();
};
window.capNhatUser = capNhatUser;

// lưu dữ liệu xuống local storage
const luuLocal = (key = "arrUser", arr = personList.arrPersons) => {
  let jsonArr = JSON.stringify(arr);
  localStorage.setItem(key, jsonArr);
};

// Lấy dữ liệu từ localStorage lên
const layDuLieuLocal = (key) => {
  let dataLocal = JSON.parse(localStorage.getItem(key));
  if (dataLocal) {
    personList.arrPersons = dataLocal;
    console.log(personList.arrPersons);
    render();
  }
};
layDuLieuLocal("arrUser");
//  hàm lọc theo đối tượng
const locTheoDoiTuong = () => {
  var arrSearch = [];
  var xepLoai = document.getElementById("locLoaiNguoiDung").value;
  for (const item of personList.arrPersons) {
    if (xepLoai == item.nguoiDung) {
      arrSearch.push(item);
      render(arrSearch);
    }
    if (xepLoai !== item.nguoiDung) {
      render(arrSearch);
    }
    if (xepLoai == "Tất cả") {
      render(personList.arrPersons);
    }
  }
};
window.locTheoDoiTuong = locTheoDoiTuong;
