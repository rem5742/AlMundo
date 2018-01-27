import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
	MatToolbarModule,
	MatSidenavModule,
	MatCardModule,
	MatGridListModule,
	MatButtonModule,
	MatTableModule,
	MatExpansionModule,
	MatFormFieldModule,
	MatInputModule,
	MatSliderModule,
	MatIconModule,
	MatCheckboxModule,
	
} from '@angular/material';

let importValues = [
		MatToolbarModule,
		MatSidenavModule,
		MatCardModule,
		MatGridListModule,
		MatButtonModule,
		MatTableModule,
		MatExpansionModule,
		MatFormFieldModule,
		MatInputModule,
		MatSliderModule,
		MatIconModule,
		MatCheckboxModule,
		
	]

@NgModule({
	imports: importValues,
	exports: importValues,
})

export class MaterialModule {};