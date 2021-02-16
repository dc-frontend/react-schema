import React from 'react'
import { ArticleOptionalProps, ArticleProps } from '../Article'
import { CreativeWorkProps } from '../../CreativeWork'
import Context from '../../../Context'

export const SocialMediaPostingOptionalProps = [
  'sharedContent', // CreativeWork
  ...ArticleOptionalProps
]

export interface SocialMediaPostingProps extends ArticleProps {
  sharedContent?: CreativeWorkProps
}

/**
 * Person Json
 * @param props props for Person.
 */
export function SocialMediaPostingJson(props: SocialMediaPostingProps) {
  let schema = { 'name': props.name, '@type': 'SocialMediaPosting' }

  SocialMediaPostingOptionalProps.forEach(p => {
    if (props[p]) { schema[p] = props[p] }
  })

  return schema
}

/**
 * @param {OrgProps} props
 */
export function SocialMediaPosting(props: SocialMediaPostingProps) {
  const schema = Context(SocialMediaPostingJson(props))

  return <script
    type='application/ld+json'
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
  />
}

export default SocialMediaPosting
