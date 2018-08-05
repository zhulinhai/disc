import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(
    private qusetionService: QuestionService
  ) { }

  ngOnInit() {
    this.qusetionService.reusltList().subscribe(data => {
      // console.log(data);
    });
  }

}
