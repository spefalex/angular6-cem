import {MatButtonModule, MatCheckboxModule ,MatIconModule , MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule } from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonToggleModule} from '@angular/material/button-toggle'; 
import { MatSelectModule } from '@angular/material/select';
import { NgModule } from '@angular/core';


@NgModule({
  
  imports: [MatButtonModule, MatCheckboxModule , MatSelectModule ,MatIconModule ,MatSidenavModule ,MatCardModule, MatDialogModule, MatButtonToggleModule, MatInputModule, MatTableModule,
    MatToolbarModule],
  exports: [MatButtonModule, MatCheckboxModule , MatSelectModule ,MatIconModule , MatSidenavModule,MatCardModule, MatDialogModule, MatInputModule, MatButtonToggleModule, MatTableModule,
    MatToolbarModule],
})
export class MaterialModule { }