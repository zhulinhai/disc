import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor() { }

  questions() {
    return [
      {key: 0, value: '富于冒险:愿意面对新事物并敢于下决心掌握的人'},
      {key: 1, value: '适应力强:轻松自如适应任何环境'},
      {key: 2, value: '生动:充满活力,表情生动,多手势'},
      {key: 3, value: '善于分析:喜欢研究各部分之间的逻辑和正确的关系。'},
    ];

  }
}
