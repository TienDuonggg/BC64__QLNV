function checkEmtyValue(value, errorId){
    
        if(value){
            document.getElementById(errorId).innerHTML = ' '
            return true
    
        }else{
            // trường hợp khi value rỗng
            document.getElementById(errorId).innerHTML = 'Vui lòng không bỏ trống';
            return false;
        }
    
    
}

function checkEmailValue(value, errorId){
    var regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    // chuỗi regex sử dụng phương thức test và truyền dữ liệu muốn kiểm tra vào
  var checkEmail =  regexEmail.test(value)
    // KHi test sẽ trả về 2 kết quả true hoặc false
    if(checkEmail){
        // Xử lí khi email đúng định dạng
        document.getElementById(errorId).innerHTML = ' '
        return true
    }else{
        // trường hợp khi email không đúng định dạng 
        document.getElementById(errorId).innerHTML = 'Vui nhập đứng định dạng email';
        return false;
    }



}

function checkPassWordValue(value, errorId){
    var regexPassword = "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$";
    // chuỗi regex sử dụng phương thức test và truyền dữ liệu muốn kiểm tra vào
  var checkPassword =  regexPassword.test(value)
    // KHi test sẽ trả về 2 kết quả true hoặc false
    if(checkPassword){
        // Xử lí khi Password đúng định dạng
        document.getElementById(errorId).innerHTML = ' '
        return true
    }else{
        // trường hợp khi Password không đúng định dạng 
        document.getElementById(errorId).innerHTML = 'Vui nhập đứng định dạng password';
        return false;
    }


}