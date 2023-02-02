// const isEqual = require('./singleton');
import { isEqual } from './singleton';

test('two consts compare', () => {
    const instance = {
        name: "singleton",
    }
    
    const instance2 = {
        name: "singleton"
    }

  expect(isEqual(instance, instance2)).toBe(false);
});