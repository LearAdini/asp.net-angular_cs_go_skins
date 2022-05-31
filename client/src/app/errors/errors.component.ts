import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.css']
})
export class ErrorsComponent implements OnInit {

  baseURL = "https://csgo-skins-angular.herokuapp.com/api/";
  validationErrors: string[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {}

  get404Error() { this.http.get(`${this.baseURL}buggy/not-found`).subscribe(response => {
    console.log(response);
  }, error => {
    console.log(error);
  });
}

  get400Error() { this.http.get(`${this.baseURL}buggy/bad-request`).subscribe(response => {
    console.log(response);
  }, error => {
    console.log(error);
  });
}

  get500Error() { this.http.get(`${this.baseURL}buggy/server-error`).subscribe(response => {
    console.log(response);
  }, error => {
    console.log(error);
  });
}

get401Error() { this.http.get(`${this.baseURL}buggy/auth`).subscribe(response => {
  console.log(response);
}, error => {
  console.log(error);
});
}

get400ValidationError() { this.http.post(`${this.baseURL}account/register`, {}).subscribe(response => { //{} empty payload]
  console.log(response);
}, error => {
  console.log(error);
  this.validationErrors = error;
});
}

}
