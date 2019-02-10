import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ProduitService } from "../services/produit.service";
import { AppService } from "../services/app.service";
import { MatDialog, MatDialogConfig ,MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";
import { ProduitComponent } from "../produit/produit.component";
 
@Component({
  selector: 'app-lireproduit',
  templateUrl: './lireproduit.component.html',
  styleUrls: ['./lireproduit.component.css']
})
export class LireproduitComponent implements OnInit {
 
  dataSource : any;
  constructor(private produitService :ProduitService ,private dialog: MatDialog) { }

  ngOnInit() {
    let info =  JSON.parse(localStorage.getItem('info_user'));
    if(info.status_compte === 'frs') {
      this.produitService.lireProduitByUser(info.token,info.id_user).subscribe(data=>{
        this.dataSource = data; 
      })
    } else {
    this.produitService.lireProduit(info.token).subscribe(res=>{
      this.dataSource = res['rows']; 
   
    })
  }
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(ProduitComponent, {
      width: '250px',
      //data: {'name': 'aaa', 'animal': 'bb'}
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }
}
