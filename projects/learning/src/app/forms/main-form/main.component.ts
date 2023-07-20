import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  // @ts-ignore
  @ViewChild('form') signupForm: NgForm;
  defaultQuestion:string = 'pet';
  answer:string = '';
  genders = ['male', 'female'];
  user = {username: '', email: '', question: '', answer: '', gender: ''};
  submitted = false;

  suggestUserName() {
    this.signupForm.form.patchValue(
      {"userData":{"username": "Superuser"}}
    )
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
    console.log(this.signupForm);
    this.user.username = this.signupForm.value.username;
    this.user.email = this.signupForm.value.email;
    this.user.question = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswered;
    this.user.gender = this.signupForm.value.gender;
    this.submitted = true;
    this.signupForm.reset()
  }
}
