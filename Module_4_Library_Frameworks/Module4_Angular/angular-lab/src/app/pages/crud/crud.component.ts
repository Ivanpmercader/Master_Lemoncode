import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MemberDialogComponent } from 'src/app/components/member-dialog/member-dialog.component';
import { RickMortyInfoCharacter } from 'src/app/models/rick-morty-info-character';
import { MembersService } from 'src/app/services/members.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {
  members: RickMortyInfoCharacter[] = [];


  constructor(private _membersService: MembersService, public dialog: MatDialog) {
    this._membersService.getAll().subscribe((members: RickMortyInfoCharacter[]) => {
      this.members = members});
   }

  ngOnInit(): void {
  }

  openDialog(member?: RickMortyInfoCharacter): void {
    const dialogRef = this.dialog.open(MemberDialogComponent, {
      data: {
        update: (typeof member !== "undefined") ? true: false,
        member: (typeof member !== "undefined") ? member: null,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (typeof result === "undefined"){
        return;
      } else if (result.update){
        this.members=  this.members.map(member => member.id === result.member.id ? {...result.member} : member);
      }else {
        this.members.push({...result.member, id: this.members.length + 1});
      }
    });
  }

  deleteMember(memberId: number){
    // let memberIndex = this.members.findIndex(member => member.id === memberId);
    // this.members.splice(memberIndex, 1);
    this.members = this.members.filter(member => member.id !== memberId);
  }

}
