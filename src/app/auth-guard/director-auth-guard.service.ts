import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class DirectorAuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate() {
                let usertype = JSON.parse(localStorage.getItem("currentUser")).usertype;
                if(usertype === 'Director'){
                    return true;
                }else{
                  this.router.navigate(['/login']);
                  return false;
                }
    }
}
