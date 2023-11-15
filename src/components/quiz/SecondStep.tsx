import React from "react";
import { useDispatch } from "react-redux";
import { setPropertyType, setStep } from "../../redux/quizReducer";
import { propertyTypeVariants } from "../../types/types";
import styles from "./Quiz.module.css";

const SecondStep = () => {
  const variants: Array<propertyTypeVariants> = [
    { var: "дом" },
    { var: "коттедж" },
    { var: "вилла" },
    { var: "квартира" },
    { var: "квартира с двориком" },
  ];

  const dispatch = useDispatch();

  const onClickVariant = (index: number) => {
    const variant = variants[index].var;
    dispatch<any>(setPropertyType(variant));
    dispatch<any>(setStep(3));
  };

  return (
    <div>
      <h1 className={styles.header}>Выберите вид недвижимости</h1>
      <ul className={styles.list}>
        {variants.map((variant: propertyTypeVariants, index) => (
          <li
            className={styles.element}
            key={index}
            onClick={() => onClickVariant(index)}
          >
            {variant.var}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SecondStep;
