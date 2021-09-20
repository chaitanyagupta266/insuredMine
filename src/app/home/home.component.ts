import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonService } from 'src/services/commonService';
import { SmartSearchPipe } from 'src/services/smart-search.pipe';
declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [SmartSearchPipe]
})
export class HomeComponent implements OnInit {
  public  userObj: any ={};
  public user:any={};
  public  usersDB: any = [
    { userid: "abc@media.com", password: "abc123", "username": "tom" },
    { userid: "def@media.com", password: "def123", "username": "dic" }
  ]
  highlightTexts = ["text", "demo", "div"];
  showDropdown: boolean =false;
  constructor(public commonService:CommonService) { }

  ngOnInit(): void {
    $(document).on('keydown', (e:any) => {
      if ((e.key==='@')) {
        this.showDropdown=true;
      }
    });
  }

ngDoCheck(){
  if(this.commonService.loadInfo('userObj')){
    let userObj:any=this.commonService.loadInfo('userObj');
    this.userObj=JSON.parse(userObj);
  } else{
    delete this.userObj;
  }

}
userSelected(value:any){
    this.user.txt=value[0];
    this.showDropdown=false;
}

}
