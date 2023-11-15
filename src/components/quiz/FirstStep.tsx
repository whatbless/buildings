import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setRegionForm,
  updateRegionFormText,
  setStep,
} from "../../redux/quizReducer";
import { RootState } from "../../redux/store";
import styles from "./Quiz.module.css";
import { Popover } from "react-tiny-popover";

const FirstStep = () => {
  const regionFormText = useSelector(
    (state: RootState) => state.quiz.regionFormText
  );
  const regions = useSelector((state: RootState) => state.quiz.regions);

  const dispatch = useDispatch();

  const addRegion = () => {
    console.log(regionFormText);
    const text: string = regionFormText;
    dispatch<any>(setRegionForm(text));
    dispatch<any>(setStep(2));
  };

  const regionFormChange = (e: any) => {
    const text = e.target.value;
    dispatch<any>(updateRegionFormText(text));
  };

  const textFormChange = (text: string) => {
    dispatch<any>(updateRegionFormText(text));
  };

  const [formFocus, setFormFocus] = useState(false);

  const focusHandler = () => {
    setFormFocus(true);
  };

  const blurHandler = () => {
    setTimeout(() => {
      setFormFocus(false);
    }, 100);
  };

  return (
    <div>
      <h1 className={styles.header}>
        Укажите район, в котором бы вы хотели себе недвижимость
      </h1>
      <div>
        <Popover
          isOpen={formFocus}
          positions={["bottom"]}
          content={
            <div>
              {regions.map(
                (region, index) =>
                  region.includes(regionFormText as string) && (
                    <div
                      key={index}
                      className={styles.regions}
                      onClick={() => textFormChange(region)}
                    >
                      {region}
                    </div>
                  )
              )}
            </div>
          }
        >
          <div className={styles.inputWrapper}>
            <input
              type="text"
              className={styles.input}
              onBlur={blurHandler}
              onFocus={focusHandler}
              value={regionFormText}
              onChange={regionFormChange}
            />
          </div>
        </Popover>
        <div className={styles.buttonWrapper}>
          <div className={styles.button} onClick={addRegion}>
            Следующий вопрос
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstStep;
