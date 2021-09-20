import { Injectable } from '@angular/core';
import {
  CanActivate, Router
} from '@angular/router';
import { CommonService } from 'src/services/commonService';


// service

/****************************************************************************
@PURPOSE      : Dont allow public pages to get accessed. (After Login)
@PARAMETERS   : N/A
@RETURN       : <boolean>
/****************************************************************************/
@Injectable()
export class CanLoginActivate implements CanActivate {
  constructor(public commonService: CommonService, public router: Router) { }
  canActivate() {
    if (!this.commonService.loadInfo('userObj')) {
      return true;
    }
    this.router.navigate(['/home']);
    return false;
  }
}
/****************************************************************************/

/****************************************************************************
@PURPOSE      : Dont allow authorized pages to get accessed.  (Before Login)
@PARAMETERS   : N/A
@RETURN       : <boolean>
/****************************************************************************/
// tslint:disable-next-line: max-classes-per-file
@Injectable()
export class CanAuthActivate implements CanActivate {
  constructor(public commonService: CommonService, public router: Router) { }

  canActivate() {
    if (this.commonService.loadInfo('userObj')) {
      return true;
    }
    this.router.navigate(['/home']);
    return false;
  }
}
/****************************************************************************/
