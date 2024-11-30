import { FormGroup, FormControl, Validators } from '@angular/forms';

export const ExamForm = new FormGroup({
  student: new FormGroup({
    first_name: new FormControl(null, [Validators.required]),
    last_name: new FormControl(null, [Validators.required])
    }
  ),
  meeting_point: new FormControl(null, []),
  date: new FormControl(null, []),
  status: new FormControl("A organiser", [])
});
