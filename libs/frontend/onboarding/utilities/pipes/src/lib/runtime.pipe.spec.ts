import { RuntimePipe } from './runtime.pipe';

describe('RuntimePipe', () => {
  let pipe: RuntimePipe;

  it('create an instance', () => {
    pipe = new RuntimePipe();
    expect(pipe).toBeTruthy();
  });

  it('should return format time with minutes', () => {
    const expectedValue = '2h 10m';
    const value = pipe.transform(130);

    expect(value).toBe(expectedValue);
  });

  it('should return format time only hours', () => {
    const expectedValue = '3h 0m';
    const value = pipe.transform(180);

    expect(value).toBe(expectedValue);
  });

  it('should return format time only minutes', () => {
    const expectedValue = '0h 45m';
    const value = pipe.transform(45);

    expect(value).toBe(expectedValue);
  });
});
