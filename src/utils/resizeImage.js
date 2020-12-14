import Resizer from 'react-image-file-resizer'

const resizeImage = (image, width, height) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      image,
      width,
      height,
      'JPEG',
      100,
      0,
      (uri) => resolve(uri),
      'blob',
      width,
      height
    )
  })

export default resizeImage
