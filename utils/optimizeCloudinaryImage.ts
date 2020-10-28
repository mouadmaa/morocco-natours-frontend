export const optimizeCloudinaryImage = (image: string, format: string) => {
  let optimizedImage = ''
  image.split('/').forEach((item, index) => {
    if (index === 6) optimizedImage += `/c_scale,${format}/`
    optimizedImage += `${index !== 6 && index !== 0 ? '/' : ''}${item}`
  })
  return optimizedImage
}
