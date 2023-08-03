import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: 'app-reactive-homework',
  templateUrl: './reactive-homework.component.html',
  styleUrls: ['./reactive-homework.component.css']
})
export class ReactiveHomeworkComponent implements OnInit {

  signupForm: FormGroup;
  statuses = ['Stable', 'Critical', 'Finished'];

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'projectName': new FormControl(null, [Validators.required, this.forbiddenProjectNames], this.forbiddenProjectNamesFromServer),
      'mail': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl(this.statuses.at(0))
    })
  }

  onSubmit() {
    console.log(this.signupForm);
    this.signupForm.reset();
  }

  forbiddenProjectNames(formControl: FormControl): {[s: string]: boolean} {
    if (formControl.value === 'Test') {
      return {'projectNameIsForbidden': true};
    }
    return null;
  }

  forbiddenProjectNamesFromServer(formControl: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (formControl.value === 'Prod') resolve({'projectNameIsForbidden': true})
        else resolve(null)
      }, 1500)
    });
    return promise;
  }
}
