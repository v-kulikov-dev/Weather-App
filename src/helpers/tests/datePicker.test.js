import { UTCToTime } from '../datePicker';

describe('date helpers', () => {
  test('should be return time in (hh:mma) format', () => {
    const mockUtcTme = 1613104208;
    const format = 'hh:mma';
    const result = '07:30am';
    expect(UTCToTime(mockUtcTme, format)).toEqual(result);
  });

  test('should be return time in (HH-mm) format', () => {
    const mockUtcTme = 1613104208;
    const format = 'HH-mm';
    const result = '07-30';
    expect(UTCToTime(mockUtcTme, format)).toEqual(result);
  });
});
