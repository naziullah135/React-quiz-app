import React from 'react';
import classNamees from '../styles/Question.module.css';
import Answers from './Answers';

const Question = () => {
    return (
        <div className={classNamees.question}>
            <div className={classNamees.qtitle}>
              <span className="material-icons-outlined"> help_outline </span>
              Here goes the question from Learn with Sumit?
            </div>
            <Answers />
        </div>
    );
};

export default Question;