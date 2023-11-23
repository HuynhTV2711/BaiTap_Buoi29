// import Person from "./Person.js";

// // Kế thừa từ class "Person " để tạo class "Customer"
// class  Customer extends Person{
//     constructor(tenCongTy, giaTriHoaDon, danhGia) {
//         super();
//         this.tenCongTy = tenCongTy;
//         this.giaTriHoaDon = giaTriHoaDon;
//         this.danhGia = danhGia
//       }
//     }
import Person from './Person.js';
class Customer extends Person {
  constructor(hoTen, maUser, diaChi, email, tenCongTy, giaTriHoaDon, danhGia) {
    super(hoTen, maUser, diaChi, email);
    this.tenCongTy = tenCongTy;
    this.giaTriHoaDon = giaTriHoaDon;
    this.danhGia = danhGia;
  }
}

export default Customer;
