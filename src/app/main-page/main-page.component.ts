import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  images: string[];
  imageIndex: number;

  imagesCycleSubscription: Subscription;

  constructor() {}

  ngOnInit(): void {
    this.fetchListOfImages();

    this.imageIndex = 0;

    this.imagesCycleSubscription = interval(5000).subscribe((val) => {
      this.cycleImage();
    });
  }

  fetchListOfImages(): void {
    fetch('./assets/files-list.txt')
      .then((response) => response.text())
      .then((data) => {
        this.images = data.split(',');
      });
  }

  cycleImage(): void {
    this.imageIndex = this.imageIndex + (1 % this.images.length);
  }
}
