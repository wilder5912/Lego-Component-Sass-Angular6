import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {DataServeService} from '../../service/data-serve.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router,
              private dataServeService: DataServeService) { }

  ngOnInit() {
    console.log(this.dataServeService.user, 'start');
    this.formValidation();
  }

  formValidation() {
    this.form =  this.formBuilder.group(
      {
        userData: ['', Validators.compose([
          Validators.required
        ])],
        passwordData: ['', Validators.compose([
          Validators.required
        ])]
      }
    );
  }
  loginUser() {
    console.log(this.form.value['userData'], this.form.value['passwordData'] , 'login');
    this.dataServeService.user = this.form.value['userData'];
    this.router.navigate(['/home']);
  }
}
