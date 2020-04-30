import Enumerable from '../07 Enumerable(lazy evaluation)';

describe('HexletLinq', () => {
  let coll;
  let cars;

  beforeEach(() => {
    cars = [
      { brand: 'bmw', model: 'm5', year: 2014 },
      { brand: 'bmw', model: 'm4', year: 2013 },
      { brand: 'kia', model: 'sorento', year: 2014 },
      { brand: 'kia', model: 'rio', year: 2010 },
      { brand: 'kia', model: 'sportage', year: 2012 },
    ];
    coll = new Enumerable(cars);
  });

  it('select', () => {
    const result = coll.select((car) => car.model);
    expect(result.toArray()).toEqual(['m5', 'm4', 'sorento', 'rio', 'sportage']);
  });

  it('orderBy', () => {
    const result = coll.orderBy((car) => car.year).select((car) => car.year);
    expect(result.toArray()).toEqual([2010, 2012, 2013, 2014, 2014]);
  });

  it('orderByDesc', () => {
    const result = coll.orderBy((car) => car.year, 'desc').select((car) => car.year);
    expect(result.toArray()).toEqual([2014, 2014, 2013, 2012, 2010]);
  });

  it('where', () => {
    const result = coll.where((car) => car.year === 2014).select((car) => car.brand);
    expect(result.toArray()).toEqual(['bmw', 'kia']);
  });

  it('#1 should be immutable', () => {
    coll.orderBy((car) => car.year, 'asc').toArray();
    const result = coll.where((car) => car.brand === 'kia')
      .where((car) => car.year > 2011).select((car) => car.model);

    expect(result.toArray()).toEqual(['sorento', 'sportage']);
  });

  it('#2 should be immutable', () => {
    const result1 = coll.select((car) => car.model);
    const result2 = coll.where((car) => car.year === 2014).select((car) => car.brand);

    expect(result1.toArray()).toEqual(['m5', 'm4', 'sorento', 'rio', 'sportage']);
    expect(result2.toArray()).toEqual(['bmw', 'kia']);
  });
});
