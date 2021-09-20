import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/services/commonService';

@ViewChild('loginForm')
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent implements OnInit {
  submitted: boolean;
  public user: any = {};
public  usersDB: any = [
    { userid: "abc@media.com", password: "abc123", "username": "tom" },
    { userid: "def@media.com", password: "def123", "username": "dic" }
  ]
  constructor(public router: Router,public commonService:CommonService) {

  }

  ngOnInit() {

  }

  /*************************************************************
  @Purpose     : On Login
  @Parameter   : form, user
  @Return      : NA
  /*************************************************************/
  onLogin(form: any) {
    if (form.valid) {
      let updatedUserArr = this.usersDB.filter((element: any) => element.userid === this.user.userid);
      if (updatedUserArr[0] && updatedUserArr[0].userid === this.user.userid && updatedUserArr[0] &&updatedUserArr[0].password === this.user.password) {
       this.commonService.setInfo('userObj',JSON.stringify(updatedUserArr[0]));
        this.router.navigate(['/home']);
      } else {
        alert('login unsuccessful');
      }


    } else {
      this.submitted = true;
    }
  }
  /*************************************************************/

  /*************************************************************/
}
