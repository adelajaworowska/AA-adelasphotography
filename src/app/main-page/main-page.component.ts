import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { gsap, TimelineMax } from 'gsap';
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

    // var menuAnim = gsap.from('img', {
    //   // scrollTrigger: {
    //   //   trigger: '#img',
    //   //   // start: 'top center',
    //   //   // markers: true,
    //   //   toggleActions: 'play pause reverse reset',
    //   // },
    //   x: 1300,
    //   duration: 5,
    //   stagger: 0.3,
    // });
    // menuAnim.pause();

    const tween = gsap.timeline({ paused: true, repeat: -1, yoyo: true });
    var controller = new ScrollMagic.Controller({});
    tween.to('.main', 1, { left: '10%', xPercent: -10 });
    new ScrollMagic.Scene({
      triggerElement: '#img',
      duration: '100%',
    })
      .on('enter', function () {
        tween.play();
      })
      .on('leave', function () {
        tween.pause();
      })
      .addTo(controller);
    // this.imagesCycleSubscription = interval(5000).subscribe((val) => {
    //   this.cycleImage();
    // });
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
