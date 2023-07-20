import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.css']
})
export class HomeworkComponent implements OnInit {

  // @ts-ignore
  @ViewChild('form') signupForm: NgForm;
  defaultSubscription:string = 'Advanced';
  subscriptions = ['Basic', 'Advanced', 'Pro'];
  subscriber = {email: '', subscription: '', password: ''};
  submitted = false;
  onSubmit() {
    console.log(this.signupForm);
    this.subscriber.email = this.signupForm.value.email;
    this.subscriber.subscription = this.signupForm.value.subscription;
    this.subscriber.password = this.signupForm.value.password;
    this.submitted = true;
    this.signupForm.reset()
  }

  ngOnInit(): void {
    this.signupForm.form.patchValue(
      {"userData":{"subscription": this.defaultSubscription}}
    )
  }
}
