import { type } from 'os';
import Matemagica from '../src/matemagica/matemagica';

test('adds 1 + 2 to equal 3', () => {
  const matematica = new Matemagica();

  matematica.setNum1(1)
  matematica.setNum2(2);

  expect(matematica.getSum()).toBe(3);
  expect(matematica.getSubtract()).toBe(-1);
  
});