import { Component, OnInit, inject } from '@angular/core';
import { DataCvService, Skills } from 'src/app/core/services/data.cv.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skillsItems: Skills = inject(DataCvService).getSkills;
  constructor(
  ) { }
  ngOnInit(): void {

  }
}
