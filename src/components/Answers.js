import Checkbox from "./Checkbox";
import classes from '../styles/Answers.module.css'
export default function Answers() {
  return (
    <>
      <div className={classes.answers}>
        <Checkbox
          className={classes.answer}
          type="checkbox"
          text="A New Hope 1"
        />
        <Checkbox
          className={classes.answer}
          type="checkbox"
          text="A New Hope 1"
        />
      </div>
    </>
  );
}
