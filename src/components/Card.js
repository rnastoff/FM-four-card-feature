import classes from './Card.module.css';

const Card = (props) => {

  let color = `background: ${props.color}`;

  return (
    <div className={classes.card}>
      <div className={classes.color} style={{ background: `${props.color}` }}></div>
      <div className={classes.title}>{props.title}</div>
      <div className={classes.description}>{props.desc}</div>
      <div className={classes.image}>
        <img src={props.icon} alt={props.desc} />
      </div>
    </div>
  )
}

export default Card;