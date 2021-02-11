import React from 'react'
import { PersonProps } from '../../Person/Person'
import { CreativeWorkOptionalProps, CreativeWorkProps } from '../CreativeWork'
import Context from '../../Context'

const optionalProps = [
  ...CreativeWorkOptionalProps
]

export interface WebPageProps extends CreativeWorkProps {
}

/**
 * Person Json
 * @param props props for Person.
 */
export function WebSiteJson(props: WebPageProps) {
  let schema = { 'name': props.name, '@type': 'WebPage' }

  optionalProps.forEach(p => {
    if (props[p]) { schema[p] = props[p] }
  })

  return schema
}

/**
 * @param {OrgProps} props
 */
export function WebSite(props: WebPageProps) {
  const schema = Context(WebSiteJson(props))

  return <script
    type='application/ld+json'
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
  />
}

export default WebSite
