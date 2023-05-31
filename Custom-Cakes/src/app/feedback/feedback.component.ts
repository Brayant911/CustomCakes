import { Component, OnInit } from '@angular/core';
import { Feedback } from '../model/feedback';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-feedback-component',
  templateUrl: './feedback-component.component.html',
  styleUrls: ['./feedback-component.component.css']
})
export class FeedbackComponentComponent implements OnInit {

  feedback: Feedback={};
  location=['Huntsville', 'Springdale', 'Orlando', 'Augusta', 'New York'];
addnotes: any;
  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  onSubmit(feedbackForm: any)
{
  console.log(feedbackForm.value);
  this._snackBar.open('Feedback submitted successfully', 'success', {
    duration: 5000,
    panelClass: ['mat-toolbar', 'mat-primary']
  })
  feedbackForm.resetForm();
}

}
