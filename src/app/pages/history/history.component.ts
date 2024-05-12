import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../services/api-call.service';
import { CommonModule } from '@angular/common';
import { MatchCardComponent } from '../../components/match-card/match-card.component';
import { NgxTypedJsModule } from 'ngx-typed-js';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule ,MatchCardComponent,NgxTypedJsModule ],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css',
})
export class HistoryComponent implements OnInit{
  allMatch:any;
  constructor(private _api:ApiCallService){

  }
  ngOnInit(): void {
   this._api.getAllMatches().subscribe({
    next:data=>{
      this.allMatch=data
    },
    error:error=>{
      console.log(error)
    }
   })
  }
}
