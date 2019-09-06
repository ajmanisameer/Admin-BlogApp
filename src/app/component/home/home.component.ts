import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private baseUrl: string  = "http://localhost:3000";


  alluser: any= [];

  constructor(private q: HttpClient) { }

  ngOnInit() {
    this.q.get(this.baseUrl + '/viewBlog').subscribe(k => {
      this.alluser = k['data'];
    })
  }

  

}
