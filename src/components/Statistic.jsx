import { ReviewBox } from './App.styled';
import propTypes from 'prop-types';


 export const Statistic = ({ good, neutral, bad, total, procent }) => {
  return (
    <ReviewBox>
      <p>Good 👌 : {good}</p>
      <p>Neutral 😐 : {neutral}</p>
      <p>Bad 👎 : {bad}</p>
      <p>Total rewiew 👯‍♀️ : {total}</p>
      <p>Positive feedback: {procent}%</p>
    </ReviewBox>
  );
};



Statistic.propTypes = {
  good: propTypes.number,
  neutral: propTypes.number,
  bad: propTypes.number,
  total: propTypes.number,
  procent: propTypes.number,
}