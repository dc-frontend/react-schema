import React from 'react'
import { ThingProps, OptionalThingProps } from '../Thing/Thing'
import { PersonProps } from '../Person/Person'
import Context from '../Context'
import PersonOrOrganization from '../Types/PersonOrOrg'

export const CreativeWorkOptionalProps = [
  'about',
  'abstract',
  'accessMode',
  'accountablePerson',
  'author',
  'award',
  'character',
  'contributor',
  'copyrightNotice',
  'isFamilyFriendly',
  ...OptionalThingProps
]

export interface CreativeWorkProps extends ThingProps {
  about?: ThingProps
  abstract?: string,
  accessMode?: string,
  accountablePerson?: PersonProps,
  author?: PersonOrOrganization,
  award?: string,
  character?: PersonProps,
  contributor?: PersonOrOrganization,
  copyrightNotice?: string,
  isFamilyFriendly?: boolean
}

/**
 * Person Json
 * @param props props for Person.
 */
export function CreativeWorkJson(props: CreativeWorkProps) {
  let schema = { 'name': props.name, '@type': 'CreativeWork' }

  CreativeWorkOptionalProps.forEach(p => {
    if (props[p]) { schema[p] = props[p] }
  })

  return schema
}

/**
 * @param {OrgProps} props
 */
export function CreativeWork(props: CreativeWorkProps) {
  const schema = Context(CreativeWorkJson(props))

  return <script
    type='application/ld+json'
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
  />
}

export default CreativeWork
