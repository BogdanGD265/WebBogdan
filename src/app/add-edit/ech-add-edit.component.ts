import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SportService } from '../services/sport.service';

@Component({
  selector: 'app-ech-add-edit',
  templateUrl: './ech-add-edit.component.html',
  styleUrls: ['./ech-add-edit.component.css']
})
export class EchAddEditComponent {
  allForm: FormGroup;


  constructor(private _fb: FormBuilder, private _sportService: SportService, private _dialogRef:DialogRef<EchAddEditComponent>)  {
    this.allForm = this._fb.group({
      ID_ECHIPA: '',
      DENUMIRE_ECHIPA: '',
      NUME_JUCATOR: '',
      PRENUME_JUCATOR: '',
      DATA_NASTERE: '',
      ID_JUCATOR: ''
    })
  }

  onFormSubmit() {
    if (this.allForm.valid) {
      this._sportService.addSport(this.allForm.value).subscribe({
        next: (val: any) => {
          alert('S-a adagat cu succes');
          this._dialogRef.close();
        },
        error: (err: any) => {
            console.error(err)
        }
      })
    }
  }

}