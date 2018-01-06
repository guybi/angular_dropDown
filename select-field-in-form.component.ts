import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'select-field-in-form',
  templateUrl: './select-field-in-form.component.html',
  styleUrls: ['./select-field-in-form.component.css']
})
export class SelectFieldInFormComponent implements OnInit {

  categories = [
    { id: 1, name: 'Development' },
    { id: 2, name: 'Art' },
    { id: 3, name: 'Languages' },
  ];
  
  submit(course) {
    console.log(course);
  }

  ngOnInit() {
  }

}
