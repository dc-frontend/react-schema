import React from 'react'
import { OptionalThingProps, ThingProps } from '../Thing/Thing'
import Context from '../Context'

const optionalProps = [
  'qualifications',
  'responsibilities',
  'skills',
  ...OptionalThingProps
]

export interface OccupationProps extends ThingProps {
  qualifications?: string,
  responsibilities?: string,
  skills?: string
}

/**
 * Person Json
 * @param props props for Person.
 */
export function OccupationJson(props: OccupationProps) {
  let schema = { 'name': props.name, '@type': 'Occupation' }

  optionalProps.forEach(p => {
    if (props[p]) { schema[p] = props[p] }
  })

  return schema
}

/**
 * @param {OrgProps} props
 */
export function Occupation(props: OccupationProps) {
  const schema = Context(OccupationJson(props))

  return <script
    type='application/ld+json'
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
  />
}

export default Occupation
