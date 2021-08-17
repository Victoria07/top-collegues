import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  pseudo = new FormControl('', [Validators.required]);
  nom = new FormControl('', [Validators.required]);
  prenom = new FormControl('', [Validators.required]);
  image = new FormControl('', [Validators.required]);

  constructor() {
  }

  getErrorMessage() {
    if (this.pseudo.hasError('required')) {
      return 'You must enter a value';
    }

    return this.pseudo.hasError('pseudo') ? 'Not a valid pseudo' : '';
  }

  ngOnInit(): void {
  }

}
