import PropTypes from 'prop-types'
import Link from 'next/link'

import CoverImage from '@/components/atoms/CoverImage'
import Date from '@/components/atoms/Date'

export default function PostPreview({ title, featuredImage, date, excerpt, uri }) {
  return (
    <div>
      <div className="mb-5">
        {featuredImage && <CoverImage title={title} featuredImage={featuredImage} uri={uri} />}
      </div>
      <h3 className="mb-3 text-3xl leading-snug line-clamp-3">
        <Link href={uri}>
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="mb-4 text-lg">
        <Date dateString={date} />
      </div>
      <p className="mb-4 text-lg leading-relaxed line-clamp-5">{excerpt}</p>
    </div>
  )
}

PostPreview.propTypes = {
  title: PropTypes.string,
  featuredImage: PropTypes.shape({ altText: PropTypes.string, sourceUrl: PropTypes.string }),
  date: PropTypes.string,
  excerpt: PropTypes.string,
  uri: PropTypes.string,
}

PostPreview.defaultProps = {
  title: '',
  featuredImage: { altText: '', sourceUrl: '' },
  date: '',
  excerpt: '',
  uri: '',
}
