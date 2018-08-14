import { Component } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {PopupService} from './services/popup.service';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = '';
  param:any;
  
  constructor(private popupService:PopupService){
    this.param = {
      arguments:[
        {
          name:'Brijesh',
          age:29
        }
      ]
    };
  }

  private openPopup():void{
    console.log(this.param);
    this.popupService.openPopUp(this.param).subscribe((res)=>{
      console.log('open..');
    });
  }

  private addArguments():void{
    this.param.arguments.push({
      name:'MyName',
      age:0
    });
  }


}
