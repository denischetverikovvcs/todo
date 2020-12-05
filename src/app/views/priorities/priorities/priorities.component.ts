import { Component, OnInit } from '@angular/core';
import {Priority} from '../../../model/Priority';
import {DataHandlerService} from '../../../service/data-handler.service';

@Component({
  selector: 'app-priorities',
  templateUrl: './priorities.component.html',
  styleUrls: ['./priorities.component.css']
})
export class PrioritiesComponent implements OnInit {

  priorities!: Priority[];
  constructor(private dataHandler: DataHandlerService) { };

  ngOnInit(): void {
    this.priorities=this.dataHandler.getPriorities()

  }

}
