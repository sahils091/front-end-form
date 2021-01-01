import React, { useState } from "react";
import "./homepage.scss";
import * as EmailValidator from "email-validator";
import Form from "../Form/Form";

const Homepage = () => {
  const [error, setError] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  const loadingFunc = () => {
    setLoading(false);
    setSubmit(true);
  };
  const emailValidation = (email) => {
    if (EmailValidator.validate(email)) {
      setError(false);
      return true;
    } else {
      setError(true);
      return false;
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    let emailValue = e.target.email.value;
    let interestValue = e.target.interest.value;
    if (!emailValidation(emailValue)) {
      return;
    } else {
      console.log(`Email is "${emailValue}"`);
      console.log(`Area of Interest is "${interestValue}"`);
      setTimeout(loadingFunc, 2000);
    }

    setTimeout(() => {
      e.target.reset();
    }, 2000);
  };

  return (
    <main className="home">
      <section className="home__banner">
        <div className="home__banner-wrapper">
          <h1 className="home__banner-title">INTERNSHIP SIGNUP FORM</h1>

          <div className="home__banner-border"></div>
        </div>
      </section>

      {submit ? (
        <div>
          <p className="home__blurb-title--conditional">
            Thanks for your interest!
          </p>

          <p className="home__blurb-text home__blurb-text--conditional">
            We will review your application and contact you for additional
            information should your background and experience meet the
            requirements of one of our openings.
          </p>
        </div>
      ) : (
        <>
          {" "}
          <section className="home__blurb">
            <p className="home__blurb-text">
              Prepare for your career with a Project Management,
              Web-Development, Graphic Design, or Digital Marketing Internship
              at Northern.
            </p>
          </section>
          <Form
            submitHandler={submitHandler}
            error={error}
            submit={submit}
            loading={loading}
          />
        </>
      )}
    </main>
  );
};

export default Homepage;
