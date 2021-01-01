import React from "react";
import "./form.scss";

const Form = ({ submitHandler, error, submit, loading }) => {
  return (
    <section className="form">
      <form className="form__input" onSubmit={submitHandler}>
        <div className=" form__input-error--wrapper">
          <p
            className={
              !error
                ? "form__input-error--blurb"
                : "form__input-error--conditional"
            }
          >
            Please enter a valid email address.
          </p>
        </div>

        <div className="form__input-wrapper">
          <input
            className={
              !error ? "form__input-email" : "form__input-email--conditional"
            }
            name="email"
            placeholder="Your Email Address * "
            type="email"
          />
          <select
            className="form__input-interest"
            placeholder="Your Interests"
            name="interest"
          >
            <option value="" className="form__input-interest-option">
              Your Interests
            </option>
            <option
              value="Project Management"
              className="form__input-interest-option"
            >
              Project Management
            </option>
            <option
              value=" Web-Development"
              className="form__input-interest-option"
            >
              {" "}
              Web-Development
            </option>
            <option
              value="Graphic Design"
              className="form__input-interest-option"
            >
              Graphic Design
            </option>
            <option
              value=" Digital Marketing"
              className="form__input-interest-option"
            >
              {" "}
              Digital Marketing
            </option>
          </select>
        </div>

        <button className="form__input-btn" disabled={submit}>
          {!error && loading ? "Submitting..." : "Sign Up Now"}

          <i
            className={
              loading
                ? "form__btn--conditional"
                : "fa fa-caret-right form__input-btn--icon"
            }
          ></i>
        </button>
      </form>
    </section>
  );
};

export default Form;
