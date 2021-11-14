import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  images: string[];
  imageIndex: number;

  imagesCycleSubscription: Subscription; 

  constructor() { }

  ngOnInit(): void {
    console.log("ngOnInit")
    this.prepareListOfImages();
  }

  prepareListOfImages(): void{
    this.images = [
      './assets/img/06070007.JPG',
      './assets/img/06070011.JPG',
      './assets/img/06070012.JPG',
      './assets/img/06070013.JPG',
      './assets/img/06070014.JPG',
      './assets/img/06070018.JPG',
      './assets/img/06840017.JPG',
      './assets/img/06840024.JPG',
      './assets/img/43280001.JPG',
      './assets/img/43280005.JPG',
      './assets/img/43280012.JPG',
      './assets/img/81800029.JPG',
      './assets/img/81800034.JPG',
      './assets/img/81800036.JPG',
    ];

    this.imageIndex = 0;

    this.imagesCycleSubscription = interval(5000)
    .subscribe((val) => { this.cycleImage() });
  }

  cycleImage(): void{
    this.imageIndex = this.imageIndex + 1 % this.images.length;
  }
}
