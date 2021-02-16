import React from 'react'
import {
  SocialMediaPostingProps,
  SocialMediaPostingOptionalProps
} from '../SocialMediaPosting'
import Context from '../../../../Context'

const optionalProps = [
  'blogPost',
  'issn',
  ...SocialMediaPostingOptionalProps
]

export interface BlogPostingProps extends SocialMediaPostingProps {
  blogPost?: object,
  issn?: string
}

/**
 * Person Json
 * @param props props for Person.
 */
export function BlogPostingJson(props: BlogPostingProps) {
  let schema = { 'name': props.name, '@type': 'BlogPosting' }

  optionalProps.forEach(p => {
    if (props[p]) { schema[p] = props[p] }
  })

  return schema
}

/**
 * @param {OrgProps} props
 */
export function BlogPosting(props: BlogPostingProps) {
  const schema = Context(BlogPostingJson(props))

  return <script
    type='application/ld+json'
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
  />
}

export default BlogPosting
