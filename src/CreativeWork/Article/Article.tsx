import React from 'react'
import { CreativeWorkOptionalProps, CreativeWorkProps } from '../CreativeWork'
import Context from '../../Context'

export const ArticleOptionalProps = [
  'articleBody', // Text
  'articleSection', // Text
  'backstory', // CreativeWork or Text
  'pageEnd', // Integer or Text
  'pageStart', // Integer or Text
  'pagination', // Text
  'speakable', // SpeakableSpecification or URL
  'wordCount',
  ...CreativeWorkOptionalProps
]

export interface ArticleProps extends CreativeWorkProps {
  articleBody?: string
  articleSection?: string,
  backstory?: any,
  pageEnd?: any,
  pageStart?: any,
  pagination?: string,
  speakable?: any,
  wordCount?: number
}

/**
 * Person Json
 * @param props props for Person.
 */
export function ArticleJson(props: ArticleProps) {
  let schema = { 'name': props.name, '@type': 'Article' }

  ArticleOptionalProps.forEach(p => {
    if (props[p]) { schema[p] = props[p] }
  })

  return schema
}

/**
 * @param {OrgProps} props
 */
export function Article(props: ArticleProps) {
  const schema = Context(ArticleJson(props))

  return <script
    type='application/ld+json'
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
  />
}

export default Article
