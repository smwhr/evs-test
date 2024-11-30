import { Component, Input } from '@angular/core';
import { ExamForm } from './exam-form.form';
import { ReactiveFormsModule } from '@angular/forms';
import { DefaultService, Exam } from '../core/api/v1';

@Component({
  selector: 'exam-form',
  imports: [ReactiveFormsModule],
  templateUrl: './exam-form.component.html',
  styleUrl: './exam-form.component.scss'
})
export class ExamFormComponent {

constructor(private defaultService: DefaultService) {}

@Input() onSubmitCallback: Function;

examForm = ExamForm
addExam() {
  if(this.examForm.valid){
    console.log(this.examForm)
    let proposedExam:Exam = this.examForm.value as unknown as Exam;
    this.examForm.disable();

    this.defaultService.examsPost(proposedExam).subscribe(body => {
      this.examForm.reset()
      this.examForm.enable()
      if(this.onSubmitCallback) this.onSubmitCallback()
    }
    )

  }else{
    alert("Invalid")
  }
}
  
}
