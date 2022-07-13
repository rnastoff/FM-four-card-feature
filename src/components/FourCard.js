import classes from './FourCard.module.css';

import Wrapper from './Wrapper';
import Card from './Card';

import iconCalculator from '../images/icon-calculator.svg';
import iconKarma from '../images/icon-karma.svg';
import iconSupervisor from '../images/icon-supervisor.svg';
import iconTeamBuilder from '../images/icon-team-builder.svg';

const FourCard = () => {
  return (
    <Wrapper>
      <h1>Reliable, efficient delivery</h1>
      <h2>Powered by Technology</h2>
      <p>Our Artificial intelligence powered tools use millions of project data points
        to ensure that your project is successful
      </p>

      <div className={classes.cards}>
        <div className={classes.cardOne}>
          <Card title={"Supervisor"} desc={"Monitors activity to identify project roadblocks"} icon={iconSupervisor} color={"#45D3D3"} />
        </div>
        <div className={classes.cardTwoThree}>
          <Card title={"Team Builder"} desc={"Scans our talent network to create the optimal team for your project"} icon={iconTeamBuilder} color={"#EA5353"} />
          <Card title={"Karma"} desc={"Regularly evaluates our talent to ensure quality"} icon={iconKarma} color={"#FCAF4A"} />
        </div>
        <div className={classes.cardFour}>
          <Card title={"Calculator"} desc={"Monitors activity to identify project roadblocks"} icon={iconCalculator} color={"#549EF2"} />
        </div>
      </div>

    </Wrapper>
  )
}

export default FourCard;