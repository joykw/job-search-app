//to get the details of the job when we click on any of the Jobs
import React from 'react';

const JobDetails = ({ details, onResetPage }) => {
  const {
    type,
    title,
    description,
    location,
    company,
    company_url,
    company_logo,
    how_to_apply
  } = details;

  return (
    <div className="job-details">
      <div className="back-link">
        <a href="/#" onClick={onResetPage}>
          &lt;&lt; Back to results
        </a>
      </div>
      <div>
        {type} / {location}
      </div>
      <div className="main-section">
        <div className="left-section">
          <div className="title">{title}</div>
          <hr />
          <div className="job-description">{description}</div>
        </div>
        <div className="right-section">
          <div className="company-details">
            <h3>About company</h3>
            <img src={company_logo} alt={company} className="company-logo" />
            <div className="company-name">{company}</div>
            <a className="company-url" href={company_url}>
              {company_url}
            </a>
          </div>
          <div className="how-to-apply">
            <h3>How to apply</h3>
            <div>{how_to_apply}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
//Here, we are displaying the description of the job details.
//Next we need a flag that will decide when to display the details page and when to display the list of jobs. For this we go to HomePage.js
//and create a new state variable with a default value of 'home' and a variable to track id of the job clicked