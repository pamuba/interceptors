import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interceptors';

  constructor(private http:HttpClient){

  }
  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/users')
              .subscribe(data=>{})  


    this.http.get('https://jsonplaceholder.typicode.com/posts')
              .subscribe(data=>{})  

    this.http.get('https://jsonplaceholder.typicode.com/comments')
              .subscribe(data=>{});
  }
}
