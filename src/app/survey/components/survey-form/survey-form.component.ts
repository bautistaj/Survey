import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Pcbrand } from 'src/app/core/model/pcbrand';
import { Survey } from 'src/app/core/model/survey';
import { PcBrandService } from 'src/app/core/services/pc-brand.service';
import { SurveyService } from 'src/app/core/services/survey.service';

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.sass']
})
export class SurveyFormComponent implements OnInit {
  public surveyForm: FormGroup;
  public pcbrands: Pcbrand[];
  private survey: Survey;

  constructor(private formBuilder: FormBuilder,
              private surveyService: SurveyService,
              private router: Router,
              private pcBrandService: PcBrandService,
              private activateRouter: ActivatedRoute) {
                this.initForm();
              }

  ngOnInit(): void {
    this.initList();
    this.loadData();
  }

  async initList() {
    this.pcbrands = await this.pcBrandService.findAll() as Pcbrand[];
  }

  initForm(): void {
    this.surveyForm = this.formBuilder.group({
      id: [null],
      email: [null, Validators.required],
      comments: [null, Validators.required],
      pcBrand: [null, Validators.required]
    });
  }

  async save() {
    if (this.surveyForm.valid) {
      const survey = this.surveyForm.value as Survey;
      await this.surveyService.create(survey);
      this.router.navigate(['/surveys/page/0']);
    }
  }

  isValidField(field: string): boolean {
    return this.surveyForm.get(field).touched && this.surveyForm.get(field).valid;
  }

  async loadData() {
    this.activateRouter.params.subscribe(async params => {
      try {
        const { id } = params;

        if (id) {
          this.survey = await this.surveyService.findById(id) as Survey;
          this.surveyForm.patchValue(this.survey);
          this.surveyForm.disable();
        }
      } catch (error) {
        console.log(error);
      }
    });
  }

  compareValues(obj1: any, obj2: any): boolean {
    return obj1 && obj2 ? obj1.id === obj2.id : obj1 = obj2;
  }
}
