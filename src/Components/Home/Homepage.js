import React from "react";
import "./homepage.scss";

const Homepage = () => {
  return (
    <main className="home">
      <section className="home__banner">
        <div className="home__banner-wrapper">
          <h1 className="home__banner-title">INTERNSHIP SIGNUP FORM</h1>

          <div className="home__banner-border"></div>

          <p className="home__banner-blurb">
            Prepare for your career with a Project Management, Web-Development,
            Graphic Design, or Digital Marketing Internship at Northern.
          </p>
        </div>
      </section>
      <section className="home__input">
        <form className="home__input-form">
          <div className="home__input-wrapper">
            <input
              className="home__input-email"
              name="email"
              placeholder="Your Email Address * "
              type="email"
              required="true"
            />
            <select
              className="home__input-interest"
              placeholder="Your Interests"
            >
              <option value="" className="home__input-interest-option">
                Your Interests
              </option>
              <option
                value="Project Management"
                className="home__input-interest-option"
              >
                Project Management
              </option>
              <option
                value=" Web-Development"
                className="home__input-interest-option"
              >
                {" "}
                Web-Development
              </option>
              <option
                value="Graphic Design"
                className="home__input-interest-option"
              >
                Graphic Design
              </option>
              <option
                value=" Digital Marketing"
                className="home__input-interest-option"
              >
                {" "}
                Digital Marketing
              </option>
            </select>
          </div>
          <button className="home__input-btn">Sign Up Now <i></i></button>
        </form>
      </section>
    </main>
  );
};

export default Homepage;
