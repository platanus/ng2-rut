import { RutPipe } from './rut.pipe';

describe('RutPipe', () => {
  let pipe: RutPipe = new RutPipe();

  it('formats string to RUT', () => {
    expect(pipe.transform('7618285K')).toBe('7.618.285-K');
  });
});
