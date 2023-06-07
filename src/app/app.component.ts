import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public activeView: 'encryption' | 'decryption' = 'encryption';
  public links = {
    informaticsTheory:
      'https://ka.wikipedia.org/wiki/%E1%83%98%E1%83%9C%E1%83%A4%E1%83%9D%E1%83%A0%E1%83%9B%E1%83%90%E1%83%AA%E1%83%98%E1%83%98%E1%83%A1_%E1%83%97%E1%83%94%E1%83%9D%E1%83%A0%E1%83%98%E1%83%90',
    cyberCecurity:
      'https://ka.wikipedia.org/wiki/%E1%83%99%E1%83%9D%E1%83%9B%E1%83%9E%E1%83%98%E1%83%A3%E1%83%A2%E1%83%94%E1%83%A0%E1%83%A3%E1%83%9A%E1%83%98_%E1%83%A3%E1%83%A1%E1%83%90%E1%83%A4%E1%83%A0%E1%83%97%E1%83%AE%E1%83%9D%E1%83%94%E1%83%91%E1%83%90',
    enginering:
      'https://ka.wikipedia.org/wiki/%E1%83%A1%E1%83%90%E1%83%98%E1%83%9C%E1%83%9F%E1%83%98%E1%83%9C%E1%83%A0%E1%83%9D_%E1%83%9B%E1%83%94%E1%83%AA%E1%83%9C%E1%83%98%E1%83%94%E1%83%A0%E1%83%94%E1%83%91%E1%83%90',
  };
}
