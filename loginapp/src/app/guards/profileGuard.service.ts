import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()

export class ProfileGuardService implements CanActivate{
    token:string|null = '';
    constructor(private router:Router){}

    canActivate(router:ActivatedRouteSnapshot):boolean{
        this.token = localStorage.getItem('Token_Number');
        if(this.token == null){
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    }
        
}