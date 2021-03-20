import { renderHook } from '@testing-library/react-hooks'

// Hooks
import useFetchGifs from '../hooks/useFetchGifs';

xdescribe('Use Fetch Gifs Test Suite', () => {

  it('Should return initial state', async () => {
    const {
      result:
      {
        current:
        {
          data,
          loading,
        },
      },
      waitForNextUpdate,
    } = renderHook(() => useFetchGifs('category'));
    await waitForNextUpdate();
    expect(data.length).toEqual(0);
    expect(loading).toBeTruthy();
  });

  it('Should return images', async () => {
    const {
      result:
      {
        current:
        {
          data,
          loading,
        },
      },
      waitForNextUpdate,
    } = renderHook(() => useFetchGifs('category'));
    await waitForNextUpdate();
    expect(data.length).toEqual(10);
    expect(loading).toBeFalsy();
  });
});
