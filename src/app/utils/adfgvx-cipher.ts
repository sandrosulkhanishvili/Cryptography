export class ADFGVXCipher {
  private readonly alphabet: string = 'abcdefghijklmnopqrstuvwxyz0123456789';
  private readonly key: string;
  private readonly keyword: string;

  constructor(key: string, keyword: string) {
    this.key = this.removeDuplicates(key);
    this.keyword = this.removeDuplicates(keyword);
  }

  private removeDuplicates(str: string): string {
    return Array.from(new Set(str)).join('');
  }

  private generateSquare(key: string): string[][] {
    const alphabet = this.alphabet.split('');
    const keyChars = key.split('');
    const square: string[][] = [];

    const sortedKey = keyChars.sort().join('');
    const remainingChars = alphabet.filter((char) => !key.includes(char));
    const sortedAlphabet = sortedKey + remainingChars.join('');

    for (let i = 0; i < 6; i++) {
      square[i] = [];
      for (let j = 0; j < 6; j++) {
        square[i][j] = sortedAlphabet.charAt(i * 6 + j);
      }
    }

    return square;
  }

  private getKeywordColumnOrder(): number[] {
    const keywordChars = this.keyword.split('');
    return keywordChars
      .map((char) => this.alphabet.indexOf(char))
      .sort((a, b) => a - b);
  }

  private encryptCharacter(
    square: string[][],
    keywordColumnOrder: number[],
    char: string
  ): string {
    let rowIndex = -1;
    let columnIndex = -1;

    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 6; j++) {
        if (square[i][j] === char) {
          rowIndex = i;
          columnIndex = j;
          break;
        }
      }
    }

    const keywordColumnIndex = keywordColumnOrder.indexOf(columnIndex);
    const adfgvx = ['A', 'D', 'F', 'G', 'V', 'X'];

    return adfgvx[rowIndex] + adfgvx[keywordColumnIndex];
  }

  private decryptCharacter(
    square: string[][],
    keywordColumnOrder: number[],
    char: string
  ): string {
    const adfgvx = ['A', 'D', 'F', 'G', 'V', 'X'];
    const rowIndex = adfgvx.indexOf(char.charAt(0));
    const keywordColumnIndex = adfgvx.indexOf(char.charAt(1));
    const columnIndex = keywordColumnOrder[keywordColumnIndex];

    return square[rowIndex][columnIndex];
  }

  public encrypt(message: string): string {
    const square = this.generateSquare(this.key);
    const keywordColumnOrder = this.getKeywordColumnOrder();
    let result = '';

    for (const char of message) {
      const lowercaseChar = char.toLowerCase();
      if (this.alphabet.includes(lowercaseChar)) {
        const encryptedChar = this.encryptCharacter(
          square,
          keywordColumnOrder,
          lowercaseChar
        );
        result += encryptedChar;
      }
    }

    return result;
  }

  public decrypt(ciphertext: string): string {
    const square = this.generateSquare(this.key);
    const keywordColumnOrder = this.getKeywordColumnOrder();
    let result = '';

    for (let i = 0; i < ciphertext.length; i += 2) {
      const char = ciphertext.substr(i, 2);
      const decryptedChar = this.decryptCharacter(
        square,
        keywordColumnOrder,
        char
      );
      result += decryptedChar;
    }

    return result;
  }
}
