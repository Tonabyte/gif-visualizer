import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

// Components
import GifCard from '../components/gifCard';

describe('Gif Card Test Suite', () => {
  const props = {
    id: 1,
    title: 'Test',
    image: 'test',
  };

  const animationTypeDescription = 'card animate__animated animate__bounce';

  it('Should show Gif Card Component', () => {
    const wrapper = shallow(<GifCard {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Sould show title correctly', () => {
    const wrapper = shallow(<GifCard {...props} />);
    expect(wrapper.find('p').text()).toEqual(props.title);
  });

  it('Should show image correctly', () => {
    const wrapper = shallow(<GifCard {...props} />);
    expect(wrapper.find('img').prop('src')).toEqual(props.image);
  });

  it('Should have animate class', () => {
    const wrapper = shallow(<GifCard {...props} />);
    expect(wrapper.find('div').prop('className')).toEqual(animationTypeDescription);
  });
});
