import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from '../../service/';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  curItem = 0;
  questions: any[];
  question: string[];
  answers = [];

  constructor(
    private questionService: QuestionService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.questionService.loadQuestions()
    .subscribe(data => {
      this.questions = data as any;
      this.question = this.questions[this.curItem];
      console.log(this.question);
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

}
