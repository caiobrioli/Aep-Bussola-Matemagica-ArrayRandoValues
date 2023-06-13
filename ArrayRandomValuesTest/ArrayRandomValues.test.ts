import { type } from 'os';
import ArrayRandomValues from "../src/ArrayRandomValues/ArrayRandomValues"

test('Testando o tamanho do array', () => {
    const classeArray = new ArrayRandomValues(Number(4));
    expect(Number(classeArray.getArray().length)).toBe(Number(4));
  });