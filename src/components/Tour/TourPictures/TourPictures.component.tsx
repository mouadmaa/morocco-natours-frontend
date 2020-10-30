import React, { FC } from 'react'

import {
  SectionPicturesContainer, PictureBoxContainer, PictureBoxImage
} from './TourPictures.styles'
import { optimizeCloudinaryImage } from '../../../utils/optimizeCloudinaryImage'

interface Props {
  name: string,
  images: string[]
}

const TourPictures: FC<Props> = props => {
  const { name, images } = props

  return (
    <SectionPicturesContainer>
      {images.map((image, index) => (
        <PictureBoxContainer
          key={index}
        >
          <PictureBoxImage
            src={optimizeCloudinaryImage(image, 'h_600')}
            alt={name}
            num={index}
          />
        </PictureBoxContainer>
      ))}
    </SectionPicturesContainer>
  )
}

export default TourPictures
