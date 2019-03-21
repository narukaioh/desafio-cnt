import React from 'react'
import Highlight from './Highlight'
import { shallow, mount } from 'enzyme'

describe('Highlight', () => {

  let wrapper = mount(<Highlight text="Texto" search="x" />)

  test('Should be Highlight component', () => {
    expect(wrapper.is('Highlight')).toBeTruthy()
  })

  test('Should receive attribute for text', () => {
    expect(wrapper.prop('text')).toEqual('Texto')
  })

  test('Should receive attribute for word that will be search', () => {
    expect(wrapper.prop('search')).toEqual('x')
  })

  test('Should put mark in text that will be search', () => {
    expect(wrapper.find('mark').text()).toEqual('x')
  })
})