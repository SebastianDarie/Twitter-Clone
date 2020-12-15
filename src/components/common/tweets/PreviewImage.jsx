import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import {
  IconStyler,
  MarginContainer,
  MarginTop,
  RemoveBtnContainer,
} from './PreviewImage'

const PreviewImage = ({ image, src, removeImage }) => {
  return (
    <MarginContainer>
      <MarginTop>
        <img
          src={src}
          alt={image.name}
          style={{ maxHeight: '100%', maxWidth: '100%' }}
        />
        <RemoveBtnContainer onClick={() => removeImage(image)}>
          <IconStyler>
            <FontAwesomeIcon icon={faTimes} />
          </IconStyler>
        </RemoveBtnContainer>
      </MarginTop>
    </MarginContainer>
  )
}

export default PreviewImage
