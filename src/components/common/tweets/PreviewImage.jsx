import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { IconStyler, MarginContainer, RemoveBtnContainer } from './PreviewImage'

const PreviewImage = ({ image, src, dispatch }) => {
  return (
    <MarginContainer>
      <img
        loading='lazy'
        src={src}
        alt={image.name}
        style={{ maxHeight: '100%', maxWidth: '100%' }}
      />
      <RemoveBtnContainer
        onClick={async () => {
          const { removeImage } = await import('../../../actions/imageActions')
          dispatch(removeImage(image))
        }}
      >
        <IconStyler>
          <FontAwesomeIcon icon={faTimes} />
        </IconStyler>
      </RemoveBtnContainer>
    </MarginContainer>
  )
}

export default PreviewImage
