import React from 'react'
import Context from '../Context'

export const OptionalThingProps = [
  'url',
  'description'
]

export interface ThingProps {
  name: string,
  url?: string,
  description?: string
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
