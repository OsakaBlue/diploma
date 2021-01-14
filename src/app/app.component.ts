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



  // tslint:disable-next-line: typedef
  get form() {
    return this.formCom.controls;
  }

  constructor(
    private fb: FormBuilder,
    private dataService: DataService
  ) {}

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(): void {
    this.formCom = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      comment: ['', [Validators.required, Validators.maxLength(150)]]
    });
    this.comments = this.dataService.getCom();
  }

  

  // tslint:disable-next-line: typedef
  addCom() {
    console.log(this.formCom.value);
    this.dataService.addCom(this.formCom.value);
    this.formCom.reset({
      name: '',
      email: '',
      comment: ''
    })
  }

  // tslint:disable-next-line: typedef
  deleteCom(i: number) {
    this.dataService.deleteCom(i);
  }
}
