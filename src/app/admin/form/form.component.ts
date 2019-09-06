import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  private baseUrl = "http://localhost:3000";

  constructor( private q: HttpClient) { }

  ngOnInit() {
  }

  addBlog(ab) {
    console.log(ab.value);
    this.q.post(this.baseUrl + '/addBlogg', ab.value).subscribe();
  }

}
