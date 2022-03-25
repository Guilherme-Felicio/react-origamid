import React from "react";
import styles from "./Input.module.css";

function Input({ label, name, type, value, onChange, error, onBlur, placeholder }) {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name}>{label}</label>
      <input
        className={styles.input}
        name={name}
        id={name}
        type={type}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
        placeholder={placeholder}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}

export default Input;
