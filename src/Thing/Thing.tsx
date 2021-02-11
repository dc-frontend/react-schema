import React from 'react'
import Context from '../Context'

export const OptionalThingProps = [
  'alternateName',
  'description',
  'identifier',
  'mainEntityOfPage',
  'potentialAction',
  'sameAs',
  'subjectOf',
  'url',
]

export interface ThingProps {
  name: string,
  alternateName?: string,
  description?: string,
  identifier?: string,
  mainEntityOfPage?: any, // CreativeWork or URL (string)
  potentialAction?: object, // Action
  sameAs?: string,
  subjectOf?: object, // CreativeWork or Event
  url?: string,
}

export function ThingJson(props: ThingProps) {
  let schema = { 'name': props.name, '@type': 'Thing' }

  OptionalThingProps.forEach(p => {
    if (props[p]) { schema[p] = props[p] }
  })

  return schema
}

/**
 * @param {ThingProps} props
 */
export function Thing(props: ThingProps) {
  const schema = Context(ThingJson(props))

  return <script
    type='application/ld+json'
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
  />
}

export default Thing
