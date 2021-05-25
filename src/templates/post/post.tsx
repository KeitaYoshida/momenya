import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'

import Adsense from '../../components/adsense/adsense'
import Button from '../../components/button/button'
import Badge from '../../components/badge/badge'

import ServiceList from 'src/components/service-list/service-list'

import './style.scss'

const getDescription = (content: string): string => {
  const body = content.replace(
    /<blockquote>/g,
    '<blockquote class="blockquote">'
  )
  if (body.match('<!--more-->')) {
    const [description] = body.split('<!--more-->')
    return description
  }
  return body
}

interface Props {
  data: GatsbyTypes.PostByPathQuery
  options: {
    isIndex: boolean
    adsense?: string | null
  }
}

const Post: React.FC<Props> = ({ data, options }: Props) => {
  const frontmatter = data.post?.frontmatter
  const category = frontmatter?.category
  const isService = category === 'サービス' || category === 'CARサービス'
  const path = frontmatter?.path || ''
  const image = frontmatter?.image || null
  const { isIndex, adsense } = options
  const html = data.post?.html || ''
  const isMore = isIndex && !!html.match('<!--more-->')

  return (
    <div className="article pt-2" key={path}>
      <div className="container">
        <div className="info">
          <Link style={{ boxShadow: 'none' }} to={path}>
            <h1 className="fs-0 fs-md-2">{frontmatter?.title}</h1>
          </Link>
          <Badge label={frontmatter?.category || ''} primary={true} />
          {(frontmatter?.tags || []).map((tag, index) => (
            <Badge label={tag as string} primary={false} key={index} />
          ))}
        </div>
        <div className="content">
          {image?.childImageSharp?.gatsbyImageData && (
            <GatsbyImage
              image={image.childImageSharp.gatsbyImageData}
              style={{ display: 'block', margin: '0 auto' }}
              alt="aaa"
            />
          )}
          <p>{frontmatter?.description}</p>
        </div>
        <div
          className="content text-center"
          dangerouslySetInnerHTML={{
            __html: isMore ? getDescription(html) : html,
          }}
        />
        {isMore && <Button path={path} label="MORE" primary={true} />}
        {!isIndex && (
          <div className="pt-8">
            <Adsense clientId={adsense} slotId="" format="auto" />
          </div>
        )}
        {isService && (
          <div className="pt-8">
            <ServiceList />
          </div>
        )}
      </div>
    </div>
  )
}

export default Post
