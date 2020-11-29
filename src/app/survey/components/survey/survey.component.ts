import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Survey } from 'src/app/core/model/survey';
import { SurveyService } from './../../../core/services/survey.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.sass']
})
export class SurveyComponent implements OnInit {
  public pager: any;
  public pageName = '';
  constructor(private activateRoute: ActivatedRoute, private surveyService: SurveyService) { }

  public surveys: Survey[];

  ngOnInit(): void {
    this.index();
  }

  index(): void {
    this.activateRoute.params.subscribe(async params => {
      const page: number = params.page;
      this.pager = await this.surveyService.index(page);
      this.surveys = this.pager.content;
      this.pageName = '/surveys/page';
    });
  }

  async delete(id: number) {
    if (id) {
      await this.surveyService.deleteById(id);
      this.index();
    }
  }
}
