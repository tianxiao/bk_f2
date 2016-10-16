import { Component } from '@angular/core'


@Component({
    selector: 'signup',
    templateUrl: './signup.html',
    styleUrls: ['./signup.css']
})
export class SignupComp {
    signup(event, username, passwd) {
        event.preventDefault();

        console.log(username+'<>'+passwd)
    }
}