import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  images: string[];

  constructor() { }

  ngOnInit(): void {
    console.log("ngOnInit")
    this.prepareListOfImages();
  }

  prepareListOfImages(){
   // TODO
   // this images = ...
  }
}
