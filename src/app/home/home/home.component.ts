import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  backUp: any
  observerForm: FormGroup
  Data: any = [
    { name: "pepito", Descripcion: "pepito compro tal cosa", budget: 1500, date: "21/05/2022" },
    { name: "pep", Descripcion: "guardiola futbol", budget: 1500, date: "21/05/2022" },
    { name: "andres", Descripcion: "andres comsss", budget: 2500, date: "21/05/2022" },
    { name: "kokok", Descripcion: "kokok compro tal cosa", budget: 3500, date: "21/05/2022" },
    { name: "pollo", Descripcion: "pollo compro tal cosa", budget: 14500, date: "21/05/2022" },
    { name: "free", Descripcion: "free compro tal cosa", budget: 7500, date: "21/05/2022" },

  ]


  constructor() {
    this.observerForm = this.createForm()
  }

  ngOnInit() {
    this.backUp = this.Data
  }

  createForm(){
    return new FormGroup({
      name: new FormControl('', Validators.required),
      Descripcion: new FormControl('', Validators.required),
      budget: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),

    })
  }

  applyFilter(event: any) {
    if (event.target.value.length == 0) {
      this.Data = this.backUp
    } else if (event.target.value.length > 2){
      this.Data = this.backUp.filter((i: any) => i.name == event.target.value)
    }
  }

  applyFilterDesc(event: any) {
    console.log("que ", event.target.value)
    if (event.target.value.length == 0) {
      this.Data = this.backUp
    } else if (event.target.value.length > 2){
      this.Data = this.backUp.filter((i: any) => i.budget == event.target.value)
    }
  }

  submitForm(){
    if(this.observerForm.valid){
      this.Data.push(this.observerForm.value)
    }
  }
}

