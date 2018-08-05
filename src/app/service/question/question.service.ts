import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, merge } from 'rxjs';
import { element } from '../../../../node_modules/protractor';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private answers =
  [1, 1, 1, 1, 3, 2, 1, 1, 0, 0, 0, 1, 1, 2, 2, 1, 1, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 3, 3, 3, 3, 3, 3, 1, 1, 1];

  constructor(
    private http: HttpClient
  ) { }

  loadQuestions(): Observable<any> {
    return this.http.get('assets/data/questions.json');
  }

  addAnswer(index: number) {
    this.answers.push(index);
  }

  reuslt(callback) {
    return this.http.get('assets/data/result.json').subscribe(data => {
      if (this.answers.length < (data as any).length) { return; }
      const dist = {'D': 0, 'I': 0, 'S': 0, 'C': 0};
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          const element1 = data[key];
          console.log(element1[this.answers[key]]);
        }
      }
      return callback && callback(data);
    });
  }

}
