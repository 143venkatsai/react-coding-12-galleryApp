import './index.css'

const ThumbnailItem = props => {
  const {imgDetails, clickImgItem, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = imgDetails

  const activeImgElement = isActive ? 'thumbnail-img' : 'thumbnail'

  const onClickImg = () => {
    clickImgItem(id)
  }

  return (
    <li className="list-element">
      <button className="button" type="button" onClick={onClickImg}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={activeImgElement}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
