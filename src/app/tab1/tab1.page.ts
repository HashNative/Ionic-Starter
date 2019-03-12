import { Component , OnInit} from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  data:any;
  constructor(private http: HTTP) {}

  ngOnInit(){
    
   
    this.http.get('https://www.hashnative.com/index.php?/example/user/Zufry Ahmed', {}, {})
    .then(data => {
  
      console.log(data.status);
      console.log(data.data); // data received by server
      console.log(data.headers);
      // return data.data;
      this.data = JSON.parse(data.data);
  
    })
    .catch(error => {
  
      console.log(error.status);
      console.log(error.error); // error message as string
      console.log(error.headers);

      // return error.error;
  
    });
  }


}
