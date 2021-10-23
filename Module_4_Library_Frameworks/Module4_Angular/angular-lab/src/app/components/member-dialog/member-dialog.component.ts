import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RickMortyInfoCharacter } from 'src/app/models/rick-morty-info-character';

export interface DialogData {
  update: boolean;
  member: RickMortyInfoCharacter;
}

@Component({
  selector: 'app-member-dialog',
  templateUrl: './member-dialog.component.html',
  styleUrls: ['./member-dialog.component.scss']
})
export class MemberDialogComponent {

  update: boolean = false;
  updateString: string = "Update Member"
  addString: string = "Add Member"
  member: RickMortyInfoCharacter;
  result: DialogData;

  constructor(
    public dialogRef: MatDialogRef<MemberDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      if (data.update){
        this.update = data.update;
        this.setMemberToUpdate(data.member);
      }else
        this.setEmptyMember();
    }

  onCancel(): void {
    this.dialogRef.close();
  }

  setEmptyMember(){
    this.member = {
      id: null,
      name: '',
      species: '',
      gender: '',
      image: 'assets/default.png',
    }
  }

  setMemberToUpdate = (memberToUpdate: RickMortyInfoCharacter) => this.member = {...memberToUpdate};

  setDataResult(){
    this.result = {
      update: this.update,
      member: {...this.member}
    }
    return this.result;
  }
}
