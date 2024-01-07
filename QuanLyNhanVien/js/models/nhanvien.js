function staff(_tknv, _name, _email, _password, _ngaylam, _luongCB, _chucvu, _gioLam){
    this.tknv = _tknv;
    this.name = _name;
    this.email = _email;
    this.password = _password;
    this.datepicker = _ngaylam;
    this.luongCB = _luongCB;
    this.chucvu = _chucvu;
    this.gioLam = _gioLam;

    this.tongLuong = function(){
        var tongLuong = 0
      if(this.chucvu == 'Sếp'){
       tongLuong = this.luongCB * 3
      }else if(this.chucvu == 'Trưởng phòng'){
          
          tongLuong = this.luongCB * 2
      }
      else{
        tongLuong = this.luongCB * 1
      }
      return tongLuong
    }

    this.xepLoai = function(){
        var xepLoai = ''
        if(this.gioLam >= 192){
            xepLoai = 'Nhân viên xuất sắc'

        }else if(this.gioLam >= 176){
            xepLoai = 'Nhân viên giỏi'
        }else{
            xepLoai = 'Nhân viên khá'
        }

        return xepLoai
    }
}

