import '@testing-library/jest-dom';

// Services
import Services from '../services/services';

xdescribe('Services Test Suite', () => {

  it('Should return a gif array', async () => {
    const response = await Services.fetchGifs('sun');
    expect(response.length).toEqual(10);
  });

  it('Should return an empty array', async () => {
    const response = await Services.fetchGifs('');
    expect(response.length).toEqual(0);
  });
});
