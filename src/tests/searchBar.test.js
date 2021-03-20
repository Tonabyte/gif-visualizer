import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

// Components
import SearchBar from '../components/searchBar';

describe('Searchbar Test Suite', () => {
  const props = {
    addCategory: jest.fn(),
  };
  let wrapper;

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<SearchBar { ...props } />);
  });

  it('Should render Searchbar', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should change text', () => {
    wrapper.find('input').simulate('change', {
      target: {
        value: 'test',
      },
    });
  });

  it('Should submit text', () => {
    wrapper.find('form').simulate('submit', { preventDefault(){} });
    expect(props.addCategory).not.toHaveBeenCalled();
  });

  it('Should clear input text', () => {
    wrapper.find('input').simulate('change', {
      target: {
        value: 'test',
      },
    });
    wrapper.find('form').simulate('submit', { preventDefault(){} });
    expect(props.addCategory).toHaveBeenCalled();
    expect(wrapper.find('input').prop('value')).toEqual('');
  });
});