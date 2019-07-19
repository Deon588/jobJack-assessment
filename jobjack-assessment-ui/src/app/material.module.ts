import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';
import { MatSnackBarModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material';
import { MatTableModule } from '@angular/material';
import { MatTooltipModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
	declarations: [],
	imports: [	  
	  MatButtonModule,
	  MatFormFieldModule,
	  MatInputModule,	  
	  MatToolbarModule,
	  MatSnackBarModule,
	  MatProgressSpinnerModule,	  	  
	  MatTableModule,
	  MatTooltipModule,
	  MatPaginatorModule
	],
	exports: [	  
	  MatButtonModule,
	  MatFormFieldModule,
	  MatInputModule,	  
	  MatToolbarModule,
	  MatSnackBarModule,
	  MatProgressSpinnerModule,	  
	  MatTableModule,	  
	  MatTooltipModule,
	  MatPaginatorModule
	],
}) export class MaterialModule {}