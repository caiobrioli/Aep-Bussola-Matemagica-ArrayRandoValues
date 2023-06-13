class Matemagica {
  private num1: number;
  private num2: number;

  public setNum1(num1: number): void {
    if (typeof num1 === 'number') {
      this.num1 = num1;
    } else {
      throw new Error('Invalid input');
    }
  }

  public setNum2(num2: number): void {
    if (typeof num2 === 'number') {
      this.num2 = num2;
    } else {
      throw new Error('Invalid input');
    }
  }

  public getNum1(): number {
    return this.num1;
  }

  public getNum2(): number {
    return this.num2;
  }

  public getSum(): number {
    return this.num1 + this.num2;
  }

  public getSubtract(): number {
    return this.num1 - this.num2;
  }
}

export default Matemagica;
