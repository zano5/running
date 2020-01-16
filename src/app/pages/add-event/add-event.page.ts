import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { RunningService } from 'src/app/services/running.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.page.html',
  styleUrls: ['./add-event.page.scss'],
})
export class AddEventPage implements OnInit {

  users: any;
  defaultpic=true
  theUser=[];
  photoURL: string;
  uploadPercent: number;
  currentuser: string;
  

  clubs=[]
  newName
  newAddress
  newOpeningHours
  newClosingHours
  newPrice
  user = {} as User;
  
  public eventForm: FormGroup;


  constructor(
    private fb: FormBuilder,public runn: RunningService, private authService: AuthService,) {

    
    this.eventForm = fb.group({

      newName: ['', Validators.compose([Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4), Validators.maxLength(30), Validators.required])],
      newAddress: ['', Validators.required],
      newOpeningHours: ['', Validators.required],
      newClosingHours: ['', Validators.required],
      newPrice: ['', Validators.required],

    },
    );

   this.clubs=[]

   this.theUser=[]    
 
   }

  ngOnInit() {
  }
addEvent(newName,newAddress,newOpeningHours,newClosingHours,newPrice)
{

      this.runn.addEvent(this.newName,this.newAddress,this.newOpeningHours,this.newClosingHours,this.newPrice)
}

uploadEventPic(event){
  this.runn.uploadEventPic(event)
}



}
