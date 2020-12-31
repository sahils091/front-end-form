import React, { useState } from "react";
import "./homepage.scss";

const Homepage = () => {
  const [error, setError] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [loading, setLoading] = useState(undefined);
  const loadingFunc = (e)=>{
    setLoading(false);
    console.log("Does this work??")
    setSubmit(true);
    e.target.reset();
    console.log(submit)
  }
  const submitHandler = (e) =>{
   e.preventDefault();
   setTimeout(loadingFunc, 2000);
   setLoading(true)
   console.log(loading , "loading is ??");
    console.log(error);
   let emailValue = e.target.email.value;
   let interestValue = e.target.interest.value;
   emailValue.includes('@') ? setError(false) : setError(true);
   
   console.log(`Email is "${emailValue}"`);
   console.log(`Area of Interest is "${interestValue}"`);
   
     
 
  }
  return (
    <main className="home">
      <section className="home__banner">
        <div className="home__banner-wrapper">  
          <h1 className="home__banner-title">INTERNSHIP SIGNUP FORM</h1>

          <div className="home__banner-border"></div>

          <p className="home__banner-blurb" >
            Prepare for your career with a Project Management, Web-Development,
            Graphic Design, or Digital Marketing Internship at Northern.
          </p>
        </div>
      </section>
      <section className="home__input">
        <form className="home__input-form" onSubmit={submitHandler}>
          <div className=" home__input-error--wrapper">
            <p className= {!error ? "home__input-error--blurb" : "home__input-error--conditional" }>
              Please enter a valid email address.
            </p>
          </div>

          <div className="home__input-wrapper">
            <input
            className= {!error ? "home__input-email" : "home__input-email--conditional" }
              name="email"
              placeholder="Your Email Address * "
              type="email"
            />
            <select
              className="home__input-interest"
              placeholder="Your Interests"
              name="interest"
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
          {/* disabled={} */}
          <button className="home__input-btn" > 
          {
            loading ? "Submitting..." : "Sign Up Now" 
            }
            
            <i className= { loading ? "home__btn--conditional" : "fa fa-caret-right home__input-btn--icon"}></i>
          </button>
        </form>
      </section>
    </main>
  );
};

export default Homepage;
