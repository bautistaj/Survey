import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pcbrand } from 'src/app/core/model/pcbrand';
import { PcBrandService } from 'src/app/core/services/pc-brand.service';

@Component({
  selector: 'app-pc-brand-form',
  templateUrl: './pc-brand-form.component.html',
  styleUrls: ['./pc-brand-form.component.sass']
})
export class PcBrandFormComponent implements OnInit {
  public pcbrandForm: FormGroup;
  public pcbrand: Pcbrand = new Pcbrand();

  constructor(private formBuilder: FormBuilder,
              private pcBrandService: PcBrandService,
              private router: Router,
              private activateRouter: ActivatedRoute) {
    this.initForm();
  }

  ngOnInit(): void {
    this.loadData();
  }

  initForm(): void {
    this.pcbrandForm = this.formBuilder.group({
      id: [null],
      name: [null, Validators.required]
    });
  }

  async save() {
    if (this.pcbrandForm.valid) {
      const pcbrand = this.pcbrandForm.value as Pcbrand;
      await this.pcBrandService.create(pcbrand);
      this.router.navigate(['/pcbrands/page/0']);
    }
  }

  isValidField(field: string): boolean {
    return this.pcbrandForm.get(field).touched && this.pcbrandForm.get(field).valid;
  }

  async loadData() {
    this.activateRouter.params.subscribe(async params => {
      try {
        const { id } = params;

        if (id) {
          this.pcbrand = await this.pcBrandService.findById(id) as Pcbrand;
          this.pcbrandForm.patchValue(this.pcbrand);
        }
      } catch (error) {
        console.log(error);
      }
    });
  }
}
