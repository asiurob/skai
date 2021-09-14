import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyAccountService } from '@services/my-account.service';
import { motorcycle } from 'shared/interface/motorcycle.interface';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  personalInformation: FormGroup = this.fb.group({
    name: [this.User[0].name, Validators.required],
    lastName: [this.User[0].lastName, Validators.required],
    email: [this.User[0].email, [Validators.required, Validators.email]],
    celNumber: [this.User[0].celNumber, Validators.required],
    gender: [this.User[0].gender, Validators.required]
  })

  password: FormGroup = this.fb.group({
    lastPassword: ['', Validators.required],
    newPassword: ['', Validators.required],
    confirmNewPassword: ['', Validators.required],
  })

  get User(){
    return this.myAccount$.user
  }

  get historys(){
    return this.myAccount$.historys
  }

  get publics(){
    return this.myAccount$.publics
  }

  get favorites(){
    return this.myAccount$.favorites
  }

  constructor( private fb : FormBuilder,
               private myAccount$: MyAccountService,
  ) { }

  ngOnInit():void {
    console.log(this.publics)
  }

}
