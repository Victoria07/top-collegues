import {Component, OnInit} from '@angular/core';
import {Service} from "../../common/service/service";


@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css'],
  providers: [Service]
})
export class CollegueComponent implements OnInit {

  collegues = this.getAllCollegues();

  constructor(private collegueService: Service) {
  }

  ngOnInit(): void {
  }

  getAllCollegues(): any {
    return this.collegueService.findAllUsers().then(collegue => collegue.filter(col => col.nom).filter(col => col.photo)).then(collegues => this.collegues = collegues);
  }

}
