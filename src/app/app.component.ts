import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EchAddEditComponent } from './add-edit/ech-add-edit.component';
import { SportService } from './services/sport.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Web Bogdan';

  constructor(private _dialog: MatDialog, private _sportService: SportService) { }
  openAddEditEchForm() {
    this._dialog.open(EchAddEditComponent);
  }

  ngOnInit(): void{
    this.getSport();
  }

  getSport() {
    this._sportService.getSport().subscribe({
      next: (res) => {
        console.log(res)
      },
      error: console.log,
    });
  }
}
