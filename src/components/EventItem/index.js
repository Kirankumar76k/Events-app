// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, onClickImg} = props
  const {id, name, imageUrl, location} = eventDetails
  const onClickEvent = () => {
    onClickImg(id)
  }

  return (
    <li className="item" key={id}>
      <button type="button" onClick={onClickEvent} className="btn">
        <img
          src={imageUrl}
          onClick={onClickEvent}
          alt="event"
          className="event-img"
        />
      </button>
      <p className="event-head">{name}</p>
      <p className="event-location">{location}</p>
    </li>
  )
}
export default EventItem
