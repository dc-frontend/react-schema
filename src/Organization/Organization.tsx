import React from 'react'
import { ThingProps, OptionalThingProps } from '../Thing/Thing'
import Context from '../Context'

const optionalProps = [
  'address',
  'email',
  'globalLocationNumber',
  'isicV4',
  'naics',
  'taxID',
  ...OptionalThingProps
]

export interface OrgProps extends ThingProps {
  address?: any,
  email?: string,
  globalLocationNumber?: string,
  isicV4?: string,
  naics?: string,
  taxID?: string
}

export function OrganizationJson(props: OrgProps) {
  let schema = { 'name': props.name, '@type': 'Organization' }

  optionalProps.forEach(p => {
    if (props[p]) { schema[p] = props[p] }
  })

  return schema
}

/**
 * @param {OrgProps} props
 */
export function Organization(props: OrgProps) {
  const schema = Context(OrganizationJson(props))

  if (props.url) { schema['url'] = props.url }
  if (props.description) { schema['description'] = props.description }

  return <script
    type='application/ld+json'
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
  />
}

export default Organization
