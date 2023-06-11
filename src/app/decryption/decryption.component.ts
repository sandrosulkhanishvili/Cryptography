import { Component, OnInit } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-decryption',
  templateUrl: './decryption.component.html',
  styleUrls: ['./decryption.component.scss'],
})
export class DecryptionComponent implements OnInit {
  public selectedOption:
    | 'AES'
    | 'DES'
    | 'Triple DES'
    | 'Rabbit'
    | 'RC4'
    | 'Option5' = 'AES';
  public inputData: string = '';
  public password: string = null;
  public outputData: any = '';
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

  onDecrypt() {
    console.log('this.outputData :', this.outputData);
    switch (this.selectedOption) {
      case 'AES':
        this.outputData = CryptoJS.AES.decrypt(
          this.inputData,
          this.password
        ).toString(CryptoJS.enc.Utf8);
        break;
      case 'DES':
        this.outputData = CryptoJS.DES.decrypt(
          this.inputData,
          this.password
        ).toString(CryptoJS.enc.Utf8);
        break;
      case 'Triple DES':
        this.outputData = CryptoJS.TripleDES.decrypt(
          this.inputData,
          this.password
        ).toString(CryptoJS.enc.Utf8);
        break;
      case 'Rabbit':
        this.outputData = CryptoJS.Rabbit.decrypt(
          this.inputData,
          this.password
        ).toString(CryptoJS.enc.Utf8);
        break;
      case 'RC4':
        this.outputData = CryptoJS.RC4.decrypt(
          this.inputData,
          this.password
        ).toString(CryptoJS.enc.Utf8);
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
