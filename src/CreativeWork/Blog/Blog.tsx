import React from 'react'
import { CreativeWorkOptionalProps, CreativeWorkProps } from '../CreativeWork'
import Context from '../../Context'

const optionalProps = [
  'blogPost',
  'issn',
  ...CreativeWorkOptionalProps
]

export interface BlogProps extends CreativeWorkProps {
  blogPost?: object,
  issn?: string
}

/**
 * Person Json
 * @param props props for Person.
 */
export function BlogJson(props: BlogProps) {
  let schema = { 'name': props.name, '@type': 'Blog' }

  optionalProps.forEach(p => {
    if (props[p]) { schema[p] = props[p] }
  })

  return schema
}

/**
 * @param {OrgProps} props
 */
export function Blog(props: BlogProps) {
  const schema = Context(BlogJson(props))

  return <script
    type='application/ld+json'
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
  />
}

export default Blog
