import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from './shared/data.service';
import { Comment } from './shared/models/comment.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  comments: Comment [];
  formCom: FormGroup;



  get form() {
    return this.formCom.controls;
  }

  constructor(
    private fb: FormBuilder,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.formCom = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      comment: ['', [Validators.required, Validators.maxLength(150)]]
    });
    this.comments = this.dataService.getCom();
  }

  

  addReview() {
    console.log(this.formCom.value);
    this.dataService.addReview(this.formCom.value);
    this.formCom.reset({
      name: '',
      email: '',
      comment: ''
    })
  }

  deleteCom(i: number) {
    this.dataService.deleteCom(i);
  }
}
