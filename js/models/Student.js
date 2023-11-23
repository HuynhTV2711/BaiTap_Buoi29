import Person from './Person.js';

class Student extends Person {
  constructor(hoTen, maUser, diaChi, email, diemToan, diemLy, diemHoa) {
    super(hoTen, maUser, diaChi, email);
    this.diemToan = diemToan;
    this.diemLy = diemLy;
    this.diemHoa = diemHoa;
  }
}

export default Student;
