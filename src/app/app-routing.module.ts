import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResultComponent } from './result/result.component';
import { QuestionComponent } from './question/question.component';


const appRoutes: Routes = [
  {path: 'result', component: ResultComponent },
  {path: 'question', component: QuestionComponent },
  {path: '', component: HomeComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }