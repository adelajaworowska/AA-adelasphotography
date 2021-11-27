import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  images: string[];

  imagesCycleSubscription: Subscription;

  constructor() {}

  ngOnInit(): void {
    this.fetchListOfImages();

  }

  fetchListOfImages(): void {
    fetch('./assets/files-list.txt')
      .then((response) => response.text())
      .then((data) => {
        this.images = data.split(',');
      });
  }

}
