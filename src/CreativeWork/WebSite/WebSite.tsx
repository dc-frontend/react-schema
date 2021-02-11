import React from 'react'
import { ThingProps, OptionalThingProps } from '../../Thing/Thing'
import { CreativeWorkOptionalProps, CreativeWorkProps } from '../CreativeWork'
import { PersonProps } from '../../Person/Person'
import Context from '../../Context'

const optionalProps = [
  'issn',
  ...CreativeWorkOptionalProps
]

export interface WebSiteProps extends CreativeWorkProps {
  issn?: string
}

/**
 * Person Json
 * @param props props for Person.
 */
export function WebSiteJson(props: WebSiteProps) {
  let schema = { 'name': props.name, '@type': 'WebSite' }

  optionalProps.forEach(p => {
    if (props[p]) { schema[p] = props[p] }
  })

  return schema
}

/**
 * @param {OrgProps} props
 */
export function WebSite(props: WebSiteProps) {
  const schema = Context(WebSiteJson(props))

  return <script
    type='application/ld+json'
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
  />
}

export default WebSite
