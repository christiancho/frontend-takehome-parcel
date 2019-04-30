import sinon from 'sinon';

import debounce from '../../src/utils/debounce';

let clock;

beforeEach(() => {
  clock = sinon.useFakeTimers();
});

afterEach(() => {
  clock.restore();
});

describe('debounce', () => {
  it('throws a TypeError if arguments are of invalid types', () => {
    expect(() => debounce()).toThrow();
  });

  it('does not call the function immediately', () => {
    const delay = 1000;
    const testFunc = jest.fn();
    const debounced = debounce(testFunc, delay);

    debounced();
    expect(testFunc).toHaveBeenCalledTimes(0);
  });

  it('executes the function after a delay', () => {
    const delay = 1000;
    const testFunc = jest.fn();
    const debounced = debounce(testFunc, delay);

    debounced();
    clock.tick(delay);
    expect(testFunc).toHaveBeenCalledTimes(1);
  });
});
