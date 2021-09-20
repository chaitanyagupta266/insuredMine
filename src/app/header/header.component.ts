import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { CommonService } from 'src/services/commonService';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
public  userObj: any;
  constructor(public commonService:CommonService) { }

  ngOnInit(): void {
  }
  
ngDoCheck(){
  if(this.commonService.loadInfo('userObj')){
    let userObj:any=this.commonService.loadInfo('userObj');
    this.userObj=JSON.parse(userObj);
  } else{
    delete this.userObj;
  }
}
}
