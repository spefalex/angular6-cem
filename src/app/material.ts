import {MatButtonModule, MatCheckboxModule ,MatIconModule , MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule ,MatSnackBarModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonToggleModule} from '@angular/material/button-toggle'; 
import { MatSelectModule } from '@angular/material/select';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule }  from '@angular/material/progress-spinner'; 

@NgModule({
  
  imports: [MatButtonModule, MatCheckboxModule ,MatProgressSpinnerModule ,MatSnackBarModule, MatSelectModule ,MatIconModule ,MatSidenavModule ,MatCardModule, MatDialogModule, MatButtonToggleModule, MatInputModule, MatTableModule,
    MatToolbarModule],
  exports: [MatButtonModule, MatCheckboxModule ,MatSnackBarModule, MatProgressSpinnerModule , MatSelectModule ,MatIconModule , MatSidenavModule,MatCardModule, MatDialogModule, MatInputModule, MatButtonToggleModule, MatTableModule,
    MatToolbarModule],
})
export class MaterialModule { }