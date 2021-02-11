import React from 'react'
import { ThingProps, OptionalThingProps } from '../Thing/Thing'
import { OccupationProps } from '../Occupation/Occupation'
import Context from '../Context'

const optionalProps = [
  'additionalName',
  'award',
  'birthDate',
  'email',
  'familyName',
  'funder',
  'givenName',
  'hasOccupation',
  'nationality',
  'worksFor',
  ...OptionalThingProps
]

export interface PersonProps extends ThingProps {
  additionalName?: string,
  award?: string,
  birthDate?: string,
  email?: string,
  givenName?: string,
  familyName?: string
  funder?: object,
  worksFor?: object,
  hasOccupation?: OccupationProps,
  nationality?: object
}

/**
 * Person Json
 * @param props props for Person.
 */
export function PersonJson(props: PersonProps) {
  let schema = { 'name': props.name, '@type': 'Person' }

  optionalProps.forEach(p => {
    if (props[p]) { schema[p] = props[p] }
  })

  return schema
}

/**
 * @param {OrgProps} props
 */
export function Person(props: PersonProps) {
  const schema = Context(PersonJson(props))

  return <script
    type='application/ld+json'
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
  />
}

export default Person
