import React from 'react'

export interface ThingProps {
  name: string,
  url?: string,
  description?: string
}

/**
 * @param {ThingProps} props
 */
export function Thing(props: ThingProps) {
  let schema = {
    "@context": "https://schema.org",
    "@type": "Thing",
    "name": props.name
  }

  if (props.url) { schema['url'] = props.url }
  if (props.description) { schema['description'] = props.description }

  return <script
    type='application/ld+json'
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
  />
}

export default Thing
