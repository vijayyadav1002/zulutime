import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from './app';

describe('<App/>', function () {
    it('should render App', function () {
        const component = shallow(<App/>);
        expect(toJson(component)).toMatchSnapshot();
    });
});