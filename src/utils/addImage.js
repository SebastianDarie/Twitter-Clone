import { actions as toastrActions } from 'react-redux-toastr'
import resizeImage from './resizeImage'

export const clearInput = (e) => {
  e.target.value = null
}

export const imageInput = async (e, dispatch, type) => {
  if (e.target.files[0]) {
    const file = e.target.files[0]
    const blob = await resizeImage(file, 510, 285)

    const image = new File([blob], file.name, {
      lastModified: new Date().getTime(),
      type: blob.type,
    })

    const { addImage } = await import('../actions/imageActions')
    dispatch(addImage(image, type))
  } else {
    dispatch(
      toastrActions.add({
        type: 'warning',
        title: 'Invalid File',
        position: 'top-right',
        message: 'Please upload an image!',
        options: {
          showCloseButton: true,
          timeOut: 3500,
        },
      })
    )
  }
}
