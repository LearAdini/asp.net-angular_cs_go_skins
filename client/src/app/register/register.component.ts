import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../service/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  validationErrors: string[] = [];
  @Output() cancelRegister = new EventEmitter<boolean>();

  constructor(private accountService: AccountService,
    private toastr: ToastrService,
    private router: Router,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.registerForm = this.fb.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]),
      confirmPassword: new FormControl('', [Validators.required, this.matchValues('password')]),
      fullName: new FormControl(''),
      country: new FormControl(''),
      city: new FormControl(''),
      address: new FormControl(''),
      phoneNumber: new FormControl('')});
  }

  register() {
    if (this.registerForm.get('password')?.value != this.registerForm.get('confirmPassword')?.value) {
      this.toastr.error('Password must match');
      this.cancel;
    }
    else {
      this.accountService.register(this.registerForm.value).subscribe(
        (data) => {
          console.log(data);
          this.router.navigate(['/products']);
          this.cancel();
        },
        error => {
          if (Array.isArray(error)) {
            this.validationErrors = error;
          }

        }
      )
      console.log(this.registerForm.value);
    }
  }

  cancel() {
    this.cancelRegister.emit(false);
  }

  matchValues(matchTo: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const controlValue = control.value;
      const controlToMatch = (control?.parent as FormGroup)?.controls[matchTo];
      const controlToMatchValue = controlToMatch?.value;
      return controlValue === controlToMatchValue ? null : { isMatching: true };
    }
  }

}
