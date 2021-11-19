import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'adelasphotography';

  ngOnInit(): void {
    this.applyStyles();
  }

  /*styles*/
  styles = [
    { name: 'main-green', value: '#062922' },
    { name: 'light-beige', value: '#F7F6F4' },
    { name: 'header-font', value: '"Anton", sans-serif' },
    { name: 'subheader-font', value: '"Hurricane", cursive' },
    { name: 'bodytext-font', value: '"Montserrat", sans-serif' },
  ];

  applyStyles(): void {
    this.styles.forEach((data) => {
      document.documentElement.style.setProperty(`--${data.name}`, data.value);
    });
  }
}
