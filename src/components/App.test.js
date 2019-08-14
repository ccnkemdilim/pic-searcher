import React from 'react';
import App from './App';
import { shallow } from 'enzyme'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import mockAxios from '../services/__mock__/axios';
import unsplash from '../api/unsplash'


configure({ adapter: new Adapter() });

describe('App component', () => {
    it('renders without crashing', () => {
        shallow(<App />);
    });

    it('App starts by asking user to enter a search term', () => {
        const wrapper = shallow(<App />);
        const text = wrapper.find('p').text();
        expect(text).toEqual('Enter a search term above');
    });

    it('User gets is asked to Enter a search term if an empty form is submitted', async () => {
        const wrapper = shallow(<App />);
        const submitSearch = wrapper.find('SearchBar');
        submitSearch.simulate('submit');
        const text = wrapper.find('p').text();
        await expect(text).toEqual('Enter a search term above');
    });

    it("fetches data from unsplash", async () => {
        /*setup: accessing the mockAxios.get function, which is the jest.fn function we defined within the mock file.
        Here we're overriding its default return value to return something specific for this test*/
        mockAxios.get.mockImplementationOnce(() =>
            Promise.resolve({
                data: { results: ["cat.jpg"] }
            })
        );

        // execute the code we want to test, by calling the unsplash function and awaiting its result (since it returns a promise).
        const images = await unsplash("cats");

        // expect
        expect(images.term).toEqual("cats");
        expect(images.images.length).toEqual(10);
    });
});




