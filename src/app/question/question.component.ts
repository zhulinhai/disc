import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../service/question/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  question: any;

  constructor(
    private questionService: QuestionService
  ) { }

  ngOnInit() {
    this.question = this.questionService.questions();
  }

  selectItem(index: number) {
    this.question = null;
  }

}
