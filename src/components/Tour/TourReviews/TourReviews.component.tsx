import React, { FC } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import {
  SectionReviewsContainer, ReviewsContainer, ReviewsCard,
  ReviewsAvatarContainer, ReviewsAvatarImage, ReviewsUser,
  ReviewsText, ReviewsRating
} from './TourReviews.styles'
import { Review } from '../../../models/reviewModel'
import { optimizeCloudinaryImage } from '../../../utils/optimizeCloudinaryImage'

interface TourReviewsProps {
  reviews: Review[]
}

const TourReviews: FC<TourReviewsProps> = props => {
  const { reviews } = props

  const data = useStaticQuery(query)

  return (
    <SectionReviewsContainer>
      <ReviewsContainer>
        {reviews.map(review => (
          <ReviewsCard key={review.id}>
            <ReviewsAvatarContainer>
              <ReviewsAvatarImage
                src={optimizeCloudinaryImage(review.user.photo as string, 'h_50')}
                alt={review.user.name}
              />
              <ReviewsUser>
                {review.user.name}
              </ReviewsUser>
            </ReviewsAvatarContainer>
            <ReviewsText>
              {review.review}
            </ReviewsText>
            <ReviewsRating>
              {[1, 2, 3, 4, 5].map(star =>
                star <= review.rating && (
                  <img
                    src={data.starSvg.publicURL}
                    key={star}
                    alt='star'
                  />
                )
              )}
            </ReviewsRating>
          </ReviewsCard>
        ))}
      </ReviewsContainer>
    </SectionReviewsContainer>
  )
}

export default TourReviews

const query = graphql`
  {
    starSvg: file(relativePath: {eq: "star.svg"}) {
      publicURL
    }
  }
`
