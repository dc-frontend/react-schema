import React from 'react'

interface OrgProps {
  name: string,
  url?: string,
  description?: string
}

/**
 * @param {OrgProps} props
 */
export default function Organization(props: OrgProps) {
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
