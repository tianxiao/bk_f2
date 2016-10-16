import { Component } from '@angular/core'
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
import { User, AuthenticationService } from './authentication.service'


@Component({
    selector: 'login',
    templateUrl: './login.html',
    styleUrls: ['./login.css']
})
export class LoginComp {
    constructor(public router: Router, public http: Http,
        private _service: AuthenticationService) {
    }

    // public user = new User("","");
    public errorMsg = '';

    signup(event) {
        event.preventDefault();
        this.router.navigate(['/signup']);
    }   

    login(event, username, passwd) {
        event.preventDefault();
        var currentuser = new User(username, passwd);
        if (!this._service.login(currentuser)) {
            this.errorMsg = 'Failed to login';
        }
    }

}