import { Component, computed, Input } from '@angular/core';
import { Exam } from '../core/api/v1';

@Component({
  selector: 'exam-status',
  imports: [],
  templateUrl: './exam-status.component.html',
  styleUrl: './exam-status.component.scss'
})
export class ExamStatusComponent {
  @Input() exam:Exam;

  label = computed(() => this.exam.status || "No status");
  icon = computed(() => {
    switch (this.exam.status) {
      case "A organiser":
        return "cursor-fill";
      case "Annulé":
        return "x";
      case "Recherche de place":
        return "hourglass";
      case "Confirmé":
        return "check";
      default:
        return null
  }});
  className = computed(() => {
    switch (this.exam.status) {
      case "A organiser":
        return "warning";
      case "Annulé":
        return "danger";
      case "Recherche de place":
        return "secondary";
      case "Confirmé":
        return "success";
      default:
        return null
  }});

}
