

import Person from './Person.js';
import Student from './Student.js';
import Employee from './Employee.js';
import Customer from './Customer.js';

class ListPerson {
  // constructor() {
    arrPersons = [];
  

  // Thêm User
  addPerson = (person) => {
    this.arrPersons.push(person);
  };
  // tìm vị trí user trong mảng
  timViTriUser = (id) => {
    let index = this.arrPersons.findIndex((item, index) => {
      return item.maUser == id;
    });
      return index;
  };
  // Xóa user
  xoaUser = (id) => {
    let index = this.timViTriUser(id);
    if (index != -1) {
      this.arrPersons.splice(index, 1);
    }
  };
  // Lấy thông tin user
  layThongTin = (id) => {
    // Duyệt mảng để tìm kiếm phần tử được người dùng tìm kiếm
    let user = this.arrPersons.find((item, index) => {
      return item.maUser == id;
    });
    if (user) {
      return user;
    }
  };
  capNhatUser= (user)=>{
    const {maUser} = user;
    let index = this.timViTriUser(maUser);
    if (index != -1) {
        this.arrPersons[index]= user;
    }
  }
}
  

export default ListPerson;
