import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { CommandeService } from "../services/commande.service";
import { AppService } from "../services/app.service";
import { MatDialog, MatDialogConfig ,MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";

@Component({
  selector: 'app-boncommande',
  templateUrl: './boncommande.component.html',
  styleUrls: ['./boncommande.component.css']
})
export class BoncommandeComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private commandeService: CommandeService,
    private appService: AppService) { }

  ngOnInit() {
  }

}
