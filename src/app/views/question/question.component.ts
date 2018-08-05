import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from '../../service/';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit, OnDestroy {

  curItem = 0;
  questions = [];
  question = [];
  answers = [];

  ngxQuestionsSub: Subscription;

  constructor(
    private questionService: QuestionService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.ngxQuestionsSub = this.questionService.loadQuestions()
    .subscribe(data => {
      this.questions = data as any;
      this.question = this.questions[this.curItem];
    });
  }

  selectItem(index: number) {
    this.curItem ++;
    this.answers.push(index);
    if (this.curItem >= this.questions.length) {
      console.log(this.answers);
      this.router.navigate(['/result']);
    } else {
      this.question = this.questions[this.curItem];
    }
  }

  ngOnDestroy() {
    this.ngxQuestionsSub.unsubscribe();
  }

}
