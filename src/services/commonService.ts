import {Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
    providedIn: 'root',
})
export class CommonService {
    public userObj:any;
    constructor(public router:Router
    ) {
    }
    setInfo(key: any,data:any) {
        window.localStorage.setItem(key,data);
     }
     loadInfo(key:any) {
        return window.localStorage.getItem(key);
     }
     clearAllLocalStorage() {
        window.localStorage.clear();
        delete this.userObj;
        this.router.navigate(['/home']);
     }
     getUserInfo(){
        let userObj:any=window.localStorage.getItem('userObj');
         this.userObj =JSON.parse(userObj);
     }
}
