import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  crews : Crews[];

  constructor() {
    this.crews = [
      {id:1, name:"Jessica Watkins"},
      {id:2, name:"Raja Chari"},
      {id:3, name:"Jasmin Moghbeli"}
    ];
  }

  ngOnInit() {
  }
}

interface Crews{
  id: number;
  name: string;
}
