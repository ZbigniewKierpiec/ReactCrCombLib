/* eslint-disable react/prop-types */
import styles from "./CheckBox.module.scss";
import { useEffect, useState } from "react";
import {
  animated,
  useSpring,
  config,
  useSpringRef,
  useChain,
} from "react-spring";

export default function Check({ check }) {
  const [isChecked, setIsChecked] = useState(check);

  const checkboxAnimationRef = useSpringRef();
  const checkboxAnimationStyle = useSpring({
    backgroundColor: isChecked ? "#2d6a4f" : "#fff",
    borderColor: isChecked ? "#2d6a4f" : "#ddd",
    config: config.gentle,
    ref: checkboxAnimationRef,
  });

  const [checkmarkLength, setCheckmarkLength] = useState(null);

  const checkmarkAnimationRef = useSpringRef();
  const checkmarkAnimationStyle = useSpring({
    x: isChecked ? 0 : checkmarkLength,
    config: config.gentle,
    ref: checkmarkAnimationRef,
  });

  useChain(
    isChecked
      ? [checkboxAnimationRef, checkmarkAnimationRef]
      : [checkmarkAnimationRef, checkboxAnimationRef],
    [0, 0.1]
  );

  useEffect(() => {
    setIsChecked(check || false);
    console.log(check);
  }, [check]);

  return (
    <label>
      <input
        className={styles.input}
        type="checkbox"
        onChange={() => {
          setIsChecked(!isChecked);
        }}
      />
      <animated.svg
        style={checkboxAnimationStyle}
        className={`${styles.checkbox} ${isChecked ? "checkbox--active" : ""}`}
        // This element is purely decorative so
        // we hide it for screen readers
        aria-hidden="true"
        viewBox="0 0 15 11"
        fill="none"
      >
        <animated.path
          d="M1 4.5L5 9L14 1"
          strokeWidth="2"
          stroke="#fff"
          ref={(ref) => {
            if (ref) {
              setCheckmarkLength(ref.getTotalLength());
            }
          }}
          strokeDasharray={checkmarkLength}
          strokeDashoffset={checkmarkAnimationStyle.x}
        />
      </animated.svg>
    </label>
  );
}
