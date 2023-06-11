import { Component, OnInit } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-encryption',
  templateUrl: './encryption.component.html',
  styleUrls: ['./encryption.component.scss'],
})
export class EncryptionComponent implements OnInit {
  public selectedOption:
    | 'AES'
    | 'DES'
    | 'Triple DES'
    | 'Rabbit'
    | 'RC4'
    | 'Option5' = 'AES';
  public inputData: string = null;
  public password: string = null;
  public outputData: any = null;
  public types: string[] = [
    'AES',
    'DES',
    'Triple DES',
    'Rabbit',
    'RC4',
    'Option5',
  ];

  constructor() {}

  ngOnInit(): void {}

  onEncrypt() {
    switch (this.selectedOption) {
      case 'AES':
        this.outputData = CryptoJS.AES.encrypt(this.inputData, this.password);
        break;
      case 'DES':
        this.outputData = CryptoJS.DES.encrypt(this.inputData, this.password);
        break;
      case 'Triple DES':
        this.outputData = CryptoJS.TripleDES.encrypt(
          this.inputData,
          this.password
        );
        break;
      case 'Rabbit':
        this.outputData = CryptoJS.Rabbit.encrypt(
          this.inputData,
          this.password
        );
        break;
      case 'RC4':
        this.outputData = CryptoJS.RC4.encrypt(this.inputData, this.password);
        break;
      case 'Option5':
        console.log(this.selectedOption);
        console.log(this.selectedOption);
        break;
    }
  }
  onCopy() {
    navigator.clipboard
      .writeText(this.outputData)
      .then(() => {
        console.log('Text copied to clipboard');
      })
      .catch((error) => {
        console.error('Error copying text to clipboard:', error);
      });
  }
}
