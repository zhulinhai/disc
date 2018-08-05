import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, merge } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private answers = [];

  constructor(
    private http: HttpClient
  ) { }

  loadQuestions(): Observable<any> {
    return this.http.get('assets/data/questions.json');
  }

  addAnswer(index: number) {
    this.answers.push(index);
  }

  reuslt(): Observable<any> {
    return this.http.get('assets/data/result.json');
  }

}
