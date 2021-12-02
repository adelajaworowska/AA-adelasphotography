import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { gsap } from 'gsap';
import ScrollMagic from 'ScrollMagic';

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

    const tween = gsap.timeline({ paused: true });
    var controller = new ScrollMagic.Controller({});
    tween.to('.galery', 1, {
      scale: 1.5,
      xPercent: -25,
    });
    new ScrollMagic.Scene({
      triggerElement: '#img',
    })
      .on('enter', function () {
        tween.play();
      })
      .on('leave', function () {
        tween.reverse();
      })
      .addTo(controller);
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
