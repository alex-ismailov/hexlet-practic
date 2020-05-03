import nrzi from '../nrzi';

describe('NRZI', () => {
  it('test econding transmission empty', () => {
    const result = nrzi('');
    expect(result).toEqual('');
  });

  it('test econding transmission first signal invalid', () => {
    const result = nrzi('|');
    expect(result).toEqual('');
  });

  it('test encoding', () => {
    const result = nrzi('¯|__|¯|___|¯¯');
    expect(result).toEqual('010110010');

    const result2 = nrzi('_|¯¯¯|_|¯¯¯¯|_|¯¯');
    expect(result2).toEqual('010011000110');

    const result3 = nrzi('¯|___|¯¯¯¯¯|___|¯|_|¯');
    expect(result3).toEqual('010010000100111');

    const result4 = nrzi('|¯|___|¯¯¯¯¯|___|¯|_|¯');
    expect(result4).toEqual('110010000100111');
  });
});
