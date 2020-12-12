import React from "react";

const Repository = ({ repository }) => (
  <div className="col s12">
    <div className="card-panel grey lighten-5 z-depth-3">
      <div className="row">
        <div className="col s10">
                    <div className="row">
                        <div className="col s2">
                            <img src={repository.owner.avatar_url} alt="" className="circle responsive-img" width={100} />
                        </div>
                        <div className="col s10">
                            <div className="row">
                                <h5 className="black-text">{repository.name}</h5>
                            </div>
                            <div className="row">
                                <p>{ repository.description }</p>
                            </div>
                        </div>
                        <div className="col s2">
                            <div className="row">
                                <i className="material-icons yellow-text text-accent-2">star_rate</i>
                                <span className="badge">{ repository.stargazers_count }</span>
                            </div>
                            <div className="row">
                                <i className="material-icons">call_split</i>
                                <span className="badge">{ repository.forks_count }</span>
                            </div>
                            <div className="row">
                                <i className="material-icons">visibility</i>
                                <span className="badge">{ repository.watchers_count }</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Repository;
