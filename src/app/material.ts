import {MatButtonModule, MatCheckboxModule ,MatIconModule , MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule ,MatSnackBarModule } from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonToggleModule} from '@angular/material/button-toggle'; 
import { MatSelectModule } from '@angular/material/select';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule }  from '@angular/material/progress-spinner'; 
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list'; 
@NgModule({
  
  imports: [MatButtonModule,MatMenuModule,MatListModule, MatCheckboxModule ,MatProgressSpinnerModule ,MatSnackBarModule, MatSelectModule ,MatIconModule ,MatSidenavModule ,MatCardModule, MatDialogModule, MatButtonToggleModule, MatInputModule, MatTableModule,
    MatToolbarModule],
  exports: [MatButtonModule, MatMenuModule,MatListModule,MatCheckboxModule ,MatSnackBarModule, MatProgressSpinnerModule , MatSelectModule ,MatIconModule , MatSidenavModule,MatCardModule, MatDialogModule, MatInputModule, MatButtonToggleModule, MatTableModule,
    MatToolbarModule],
})
export class MaterialModule { }