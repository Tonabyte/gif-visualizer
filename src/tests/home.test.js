import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

// Screens
import Home from '../screens/home';

describe('Home Test Suite', () => {

  it('Should show Home component', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Should show Home component with configured categories', () => {
    const categories = ['sun', 'happiness'];
    const wrapper = shallow(<Home  defaultConfigurations={categories} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('Grid').length).toEqual(categories.length);
  });
});
