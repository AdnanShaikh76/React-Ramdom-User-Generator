import React from "react";

const Usercard = (props) => {
  return (
    <div className="User-card">
        <img src={props.data.picture.large} alt="" className="user-img"/>
        <h2 className="User-name">{props.data.name.title} {props.data.name.first} {props.data.name.last}</h2>
        <p className="User-phone">{props.data.phone}</p>
        <p className="User-address">{props.data.location.city}, {props.data.location.state}, {props.data.location.country}, {props.data.location.postcode}</p>
    </div>);
};

export default Usercard;
