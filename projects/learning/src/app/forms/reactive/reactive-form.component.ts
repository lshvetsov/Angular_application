import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit{
  genders = ['male', 'female'];
  // @ts-ignore
  signupForm: FormGroup;
  forbiddenUserName = ['Chris', 'Anna'];

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNamesValidation.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmailValidation)
      }),
      'gender': new FormControl(this.genders.at(0)),
      'hobbies': new FormArray([])
    })
  }

  onSubmit(){
    console.log(this.signupForm);
  }
  get controls() {
    return (this.signupForm.get('hobbies') as FormArray).controls;
  }
  onHobbyAdded() {
    (this.signupForm.get('hobbies') as FormArray).push(
      new FormControl(null, Validators.required)
    );
  }

  forbiddenNamesValidation(formControl: FormControl): {[s: string]: boolean} {
    if (this.forbiddenUserName.indexOf(formControl.value) !== -1) {
      return {'nameIsForbidden': true};
    }
    return null;
  }

  forbiddenEmailValidation(formControl: FormControl): Promise<any> | Observable<any> {
      const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          if (formControl.value === 'test@test.com') resolve({'emailIsForbidden': true})
          else resolve(null)
        }, 1500)
      });
      return promise;
  }
}
