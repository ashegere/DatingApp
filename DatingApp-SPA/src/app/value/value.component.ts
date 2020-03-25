import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {

  values: any;

  constructor(private http: HttpClient) { }

  // when the component is initialized the getValues() function is called
  ngOnInit() {
    this.getValues();
  }


  // gets the values from the api as GET request and the response is a JSON object
  getValues(){
    this.http.get('http://localhost:5000/api/values', ).subscribe(response => {
      this.values = response;
    }, error => {
      console.log(error);
    });
  }

}
