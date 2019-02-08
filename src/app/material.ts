import {MatButtonModule, MatCheckboxModule ,MatIconModule } from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NgModule } from '@angular/core';

@NgModule({
  
  imports: [MatButtonModule, MatCheckboxModule , MatIconModule ,MatSidenavModule ],
  exports: [MatButtonModule, MatCheckboxModule , MatIconModule , MatSidenavModule],
})
export class MaterialModule { }