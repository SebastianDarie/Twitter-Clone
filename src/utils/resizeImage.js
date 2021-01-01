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
      100,
      100
    )
  })

export default resizeImage
