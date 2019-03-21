import React from 'react';
import { mount } from 'enzyme';
import RecipeItem from './RecipeItem';

describe('RecipeItem', () => {

    const props = {
        recipe: {
            thumbnail: "",
            title: "",
            ingredients: ""
        }
    }

    test('Should be RecipeItem', () => {
        const wrapper = mount(<RecipeItem {...props} />);
        expect(wrapper.is('RecipeItem')).toBeTruthy();
    })

    // Add more tests here
})
