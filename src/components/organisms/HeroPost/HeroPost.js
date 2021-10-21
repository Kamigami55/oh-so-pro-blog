import PropTypes from 'prop-types'
import Link from 'next/link'

import CoverImage from '@/components/atoms/CoverImage/CoverImage'
import Date from '@/components/atoms/Date/Date'
export default function HeroPost({ title, featuredImage, date, excerpt, uri }) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        {featuredImage && <CoverImage title={title} featuredImage={featuredImage} uri={uri} />}
      </div>
      <div className="md:grid md:grid-cols-2 mb-20 md:mb-28 gap-4">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight line-clamp-3">
            <Link href={uri}>
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <Date dateString={date} />
          </div>
        </div>
        <div>
          <p className="mb-4 text-lg leading-relaxed line-clamp-6">{excerpt}</p>
        </div>
      </div>
    </section>
  )
}

HeroPost.propTypes = {
  title: PropTypes.string,
  featuredImage: PropTypes.shape({ altText: PropTypes.string, sourceUrl: PropTypes.string }),
  date: PropTypes.string,
  excerpt: PropTypes.string,
  uri: PropTypes.string,
}

HeroPost.defaultProps = {
  title: '',
  featuredImage: { altText: '', sourceUrl: '' },
  date: '',
  excerpt: '',
  uri: '',
}
