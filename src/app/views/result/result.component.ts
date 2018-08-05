import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  chartOption = {
    xAxis: {
        data: ['D', 'I', 'S', 'C']
    },
    yAxis: {},
    series: [{
        data: [
            ['D', 20],
            ['I', 10],
            ['S', 5],
            ['C', 5],
        ],
        type: 'line'
    }]
  };

  constructor(
    private qusetionService: QuestionService
  ) { }

  ngOnInit() {
    this.qusetionService.reuslt().subscribe(data => {
      // console.log(data);
    });
  }

}
