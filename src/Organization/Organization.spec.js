// Link.react.test.js
import React from 'react'
import Organization from './Organization'
import renderer from 'react-test-renderer'

test('Organization renders as expected', () => {
  const myOrgName = 'My Test Org'
  const component = renderer.create(
    <Organization name={myOrgName} />
  )
  const json = component.toJSON()

  expect(json.type).toEqual('script')
  expect(json.props.type).toEqual('application/ld+json')
  expect(json.props.dangerouslySetInnerHTML.__html).toMatch('"@context":"https://schema.org"')
  expect(json.props.dangerouslySetInnerHTML.__html).toMatch('"@type":"Organization"')
  expect(json.props.dangerouslySetInnerHTML.__html).toMatch(`"name":"${myOrgName}"`)
})
