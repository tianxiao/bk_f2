import { Component, OnInit } from '@angular/core'
import { Http } from '@angular/http'


export class Greeting {
    id: string;
    content: string;
}

    // <div *ngIf="greeting">
@Component({
    // moduleId: module.id,
    selector: 'helloname',
    template: `

        <p> The ID is {{greeting.id}}</p>
        <p> The content is {{greeting.content}}</p>

    `
})
export class HelloNameComp implements OnInit {
    private greetingurl = '/resource';


    public greeting: Greeting;
    constructor(public http: Http) {

    }


    getgreeting(): Promise<Greeting> {
        return this.http.get(this.greetingurl)
        .toPromise()
        .then(response=>response.json() as Greeting)
        .catch(this.handleError);
    }

    // getgreeting(): void {
    //     this.http.get(this.greetingurl)
    //     .toPromise()
    //     .then(response=>this.greeting=response.json())
    //     .catch(this.handleError);
    // }

    private handleError(error: any): Promise<any> {
        console.error('an error occured -->', error);
        return Promise.reject(error.message||error);
    }

    ngOnInit(): void {
        this.greeting = new Greeting();
        this.greeting.id = 'uiiiiii';
        this.greeting.content = 'xxxxx';
        console.log("--> get greeting");
        this.getgreeting()
        .then(greeting=>this.greeting=greeting);
        // this.getgreeting();
    }

};