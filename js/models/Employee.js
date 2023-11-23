import Person from './Person.js';
class Employee extends Person {
  constructor(hoTen, maUser, diaChi, email, soNgayLam, luongTheoNgay) {
    super(hoTen, maUser, diaChi, email);
    this.soNgayLam = soNgayLam;
    this.luongTheoNgay = luongTheoNgay;
  }
}

export default Employee;
