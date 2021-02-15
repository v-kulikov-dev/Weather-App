import { getBackgroundImage } from '../getBackgroundImage';

import Clear from '../../assets/Clear-min.png';
import Snow from '../../assets/Snow-min.png';

describe('getBackgroundImage', () => {
  test('should be return image for snowy weather', () => {
    const mockWeather = { weather: [{ main: 'Snow' }] };
    expect(getBackgroundImage(mockWeather)).toEqual(Snow);
  });

  test('should be return image for clearly weather', () => {
    const mockWeather = { weather: [{ main: 'Clear' }] };
    expect(getBackgroundImage(mockWeather)).toEqual(Clear);
  });

  test('should be return null', () => {
    expect(getBackgroundImage()).toEqual(null);
  });
});
