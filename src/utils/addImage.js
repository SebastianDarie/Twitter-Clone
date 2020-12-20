import resizeImage from './resizeImage'

export const clearInput = (e) => {
  e.target.value = null
}

export const imageInput = async (e, dispatch, addImage, type) => {
  if (e.target.files[0]) {
    const file = e.target.files[0]
    const blob = await resizeImage(file, 1200, 675)

    const image = new File([blob], file.name, {
      lastModified: new Date().getTime(),
      type: blob.type,
    })
    dispatch(addImage(image, type))
  } //else {
  //   console.log('smth went wrong')
  // }
}
