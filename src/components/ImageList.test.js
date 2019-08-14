import React from 'react';
import ImageList from './ImageList';

import { shallow } from 'enzyme'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() });

describe('ImageList component', () => {

    it('renders list-items', () => {
        const images = [{id: "GRV4ypBKgxE", description: "Audi S5 Sunset"}, {id: "lrmo2hlFYE4", description: "Just wondering how my photography of my car does on unsplash"}];
        const wrapper = shallow(<ImageList images={images} />);

        // Expect the wrapper object to be defined
        expect(wrapper.find('.image-list')).toBeDefined();
    });
});

