import { Component, OnInit } from '@angular/core';
import { DefaultService, Exam } from './core/api/v1';
import { CommonModule } from '@angular/common';
import { ExamStatusComponent } from './exam-status/exam-status.component';
import { ExamFormComponent } from "./exam-form/exam-form.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, ExamStatusComponent, ExamFormComponent]
})


export class AppComponent implements OnInit {

onSubmit(arg0: any) {
  console.log("miaou")
}
  // exams$:Observable<Exam[]> = [];
  exams$: Exam[];
  
  constructor(private defaultService: DefaultService) {}
  
  title = 'frontend';
  displayForm = false;

  refreshExams = () => {
    this.defaultService.examsGet().subscribe(body => 
      this.exams$ = body.reverse()
    )
  }

  toggleForm = () => {
    this.displayForm = !this.displayForm;
  }

  ngOnInit() {
    this.refreshExams()
  }
}

