import { Component, OnInit } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { ADFGVXCipher } from '../utils/adfgvx-cipher';

@Component({
  selector: 'app-encryption',
  templateUrl: './encryption.component.html',
  styleUrls: ['./encryption.component.scss'],
})
export class EncryptionComponent implements OnInit {
  public selectedOption: 'AES' | 'DES' | 'Triple DES' | 'Rabbit' | 'RC4' =
    'AES';
  //| 'ADFGVXC'
  public inputData: string = null;
  public password: string = null;
  public outputData: any = null;
  public ADFGVXC = new ADFGVXCipher(this.password, 'playfair');
  public types: string[] = [
    'AES',
    'DES',
    'Triple DES',
    'Rabbit',
    'RC4',
    // 'ADFGVXC',
  ];

  constructor() {}

  ngOnInit(): void {}

  onEncrypt() {
    console.log(this.password);
    if (this.password === null) {
      alert('შეიყვანეთ გასაღები');
      console.log(this.password);
    }
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
      // case 'ADFGVXC':
      //   this.outputData = this.ADFGVXC.encrypt(this.inputData);
      //   break;
    }
  }
  onCopy() {
    navigator.clipboard
      .writeText(this.outputData)
      .then(() => {
        // console.log('Text copied to clipboard');
      })
      .catch((error) => {
        console.error('Error copying text to clipboard:', error);
      });
  }
  formReset() {
    this.inputData = null;
    this.outputData = null;
    this.password = null;
  }
}
