import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

// Components
import Grid from '../components/grid';

// Hooks
import useFetchGifs from '../hooks/useFetchGifs';
jest.mock('../hooks/useFetchGifs');

describe('Grid Test Suite', () => {
  const props = {
    category: 'test',
  };

  it('Should show Grid component', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });
    const wrapper = shallow(<Grid { ...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it.skip('Should load items when images are loaded', () => {
    useFetchGifs.mockReturnValue({
      data: [{
        id: 0,
        title: 'title',
        image: 'image',
      }],
      loading: false,
    });
    const wrapper = shallow(<Grid { ...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
