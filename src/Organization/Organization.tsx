import React from 'react'
import { ThingProps } from '../Thing/Thing'

export interface OrgProps extends ThingProps {}

/**
 * @param {OrgProps} props
 */
export function Organization(props: OrgProps) {
  let schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": props.name
  }

  if (props.url) { schema['url'] = props.url }
  if (props.description) { schema['description'] = props.description }

  return <script
    type='application/ld+json'
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
  />
}

export default Organization
