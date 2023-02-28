import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { TableRoutingModule } from './table-routing.module';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    TableRoutingModule,
    MatTableModule,
  ],
  exports: [
    TableComponent
  ]
})
export class TableModule { }
