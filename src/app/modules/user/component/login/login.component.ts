import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '@services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formularioLogin: FormGroup = this.fb.group({
    user: ['', [Validators.required, Validators.email]],
    pass: ['', [Validators.required, Validators.minLength(4)]]
  })

  constructor(
    private loginServices: LoginService,
    private fb: FormBuilder,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  login() {
    const {
      user,
      pass
    } = this.formularioLogin.value;

    this.loginServices.login(user, pass)
      .subscribe(resp => {
          console.log(resp);
          localStorage.setItem('token', resp.payload.token);
          localStorage.setItem('user', JSON.stringify(resp.payload));
          this._router.navigateByUrl('/');
        },
        error =>  console.log(error)
        //this.toastr.error('La contraseña o el usuario es incorrecto', 'Inténtalo de nuevo')
        )
      }

}
//user: alberto@skai.com.mx || Chakal
//pass: Password1!