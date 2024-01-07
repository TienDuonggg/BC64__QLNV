function getValueNV(){
  var arrValue =  document.querySelectorAll('form  input, form select')
  
  var staffs = new staff()
  // gọi tới tất cả các thẻ span thông báo lỗi thông qua class text-danger

  var arrError = document.querySelectorAll('form span.sp-thongbao')
  var isVaLid = true
  for(var i =0; i< arrValue.length; i++)
  {
   var inputValue = arrValue[i].value
   var errorId = arrError[i].id
   var elementId= arrValue[i].id
  console.log(elementId)
   console.log(staffs)
   
   
   console.log(inputValue)
  //  if(elementId == 'email'){
  //   isVaLid &= 
  //     checkEmtyValue(inputValue, errorId) &&
  //     checkEmailValue(inputValue, errorId)
  //  } else if(elementId == 'password'){
  //   isVaLid &= 
  //     checkEmtyValue(inputValue, errorId) &&
  //     checkPassWordValue(inputValue, errorId)
  //  }
  //  else{
  //   isVaLid &= checkEmtyValue(inputValue, errorId)
  //  }

  if (elementId == 'email') {
    isVaLid &= checkEmtyValue(inputValue, errorId) && checkEmailValue(inputValue, errorId);
} else if (elementId == 'password') {
    isVaLid &= checkEmtyValue(inputValue, errorId) && checkPassWordValue(inputValue, errorId);
} else {
    isVaLid &= checkEmtyValue(inputValue, errorId);
}
  

   if (isVaLid) {
    if (elementId == 'email') {
        staffs[elementId] = inputValue;
    } else if (elementId == 'password') {
        staffs[elementId] = inputValue;
    } else {
        staffs[elementId] = inputValue;
    }
}
   
}
  console.log(staffs)

  if(isVaLid){

    return staffs
  }
}


var arrStaff = []


document.getElementById('btnThemNV').onclick = function(){

  var staff =  getValueNV()

  if (staff) {
    arrStaff.push(staff);
    console.log(arrStaff);

    document.getElementById('QLNV').reset();

    luuDuLieuLocal('nhanvien', arrStaff);
    hienThiDuLieu(arrStaff);  // Truyền arrStaff vào hàm hiển thị
  } else {
    console.log("Dữ liệu không hợp lệ.");
  }
}

function hienThiDuLieu(arr){
    var inforStaff = ''
    if(arr == undefined){
        arr = arrStaff
    }

    for(var i = 0; i<arr.length; i++)
    {
        var staffs = arr[i]
        var newStaff = new staff();
        staffs = Object.assign(newStaff, staffs)
        inforStaff += `
      <tr>
        <td>${staffs.tknv}</td>
        <td>${staffs.name}</td>
        <td>${staffs.email}</td>
        <td>${staffs.datepicker}</td>
        <td>${staffs.chucvu}</td>
        <td>${staffs.tongLuong()}</td>
        <td>${staffs.xepLoai()}</td>
        
        <td>
          <button onclick="xoaDuLieu('${staffs.tknv}')" class="btn btn-danger mb-2">Xóa</button>
          <button onclick = "getInfoUser('${staffs.tknv}')" class="btn btn-warning ">Sửa</button>
        </td>
        
        </tr>
        `
    }

    document.getElementById('tableDanhSach').innerHTML = `${inforStaff}`

}

function luuDuLieuLocal(key, value){
  var stringValue = JSON.stringify(value)
  localStorage.setItem(key, stringValue)
}

function xoaDuLieu(data){


  for(var i=0;  i< arrStaff.length; i++){
    
    if(arrStaff[i].tknv == data){
      arrStaff.splice(i,1)

    }
  }
  luuDuLieuLocal('nhanvien', arrStaff)
  hienThiDuLieu()
}

function getInfoUser(data){
  var StaffIndex = {}
  for(var i=0;  i< arrStaff.length; i++){
    if(arrStaff[i].tknv == data){
      StaffIndex = arrStaff[i]
      console.log(StaffIndex)
    }
  }

  var arrInfoValue =  document.querySelectorAll('form  input, form select')
  
  for(var i =0; i< arrInfoValue.length; i++)
  {
   var value = arrInfoValue[i].value
   var id = arrInfoValue[i].id
   
   
   value  = StaffIndex[id] 
   
   
  }

  hienThiDuLieu()
}




