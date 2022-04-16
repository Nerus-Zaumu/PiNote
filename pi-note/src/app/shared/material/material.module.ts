import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

const MaterialComponents = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatGridListModule,
  MatToolbarModule,
  MatIconModule
]

@NgModule({
  declarations: [],
  imports: MaterialComponents,
  exports: MaterialComponents
})
export class MaterialModule { }
