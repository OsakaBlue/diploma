import { Injectable } from '@angular/core';
import { Comment } from './models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  comments: Comment [] = [];

  getCom() {
    return this.comments;
  }

  addReview(com: any) {
    this.comments.push({
      name: com.name,
      email: com.email,
      comment: com.comment
    });
  }

  deleteCom(i: number) {
    this.comments.splice(i, 1);
  }
}