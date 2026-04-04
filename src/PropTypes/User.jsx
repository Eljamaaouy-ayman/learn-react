import PropTypes from 'prop-types'
import React from 'react'

export default function User({fullName, age, jobTitle, isAdult, diplomes, salary}) {
  return (
    <>
        <div className="container">
            <div className="card-group">
                <div className="card">
                    <div className="card-body">
                        {isAdult && <span className="badge badge-pill badge-primary bg-primary"> Adult </span>}
                        <span className="mx-2 badge badge-pill badge-secondary bg-success"> {salary} MAD </span>
                        <span className="badge badge-pill badge-secondary bg-info"> {jobTitle}</span>
                        <h4 className="card-title">{fullName} ( {age} )</h4>
                        <ul className="list-group">
                            {diplomes?.map((diplome, key) => <li key={key} className="list-group-item">
                                    <a className="nav-link" href="#">{diplome}</a>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

User.propTypes = {
    fullName : PropTypes.string.isRequired,
    jobTitle : PropTypes.string.isRequired,
    age      : PropTypes.number.isRequired,
    isAdult  : PropTypes.bool.isRequired,
    diplomes : PropTypes.arrayOf(PropTypes.string).isRequired,
    salary   : PropTypes.number.isRequired
}

User.defaultProps = {
    salary : 0,
    jobTitle : 'no job title'
}