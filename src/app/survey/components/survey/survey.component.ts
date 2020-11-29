import { Component, OnInit } from '@angular/core';
import { SurveyService } from './../../../core/services/survey.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.sass']
})
export class SurveyComponent implements OnInit {

  constructor(private surveyService: SurveyService) { }

  ngOnInit(): void {
    this.index();
  }

  index(): void{
    this.surveyService.index(0).subscribe(response => {
      console.log('response ', response);
    });
  }
}
