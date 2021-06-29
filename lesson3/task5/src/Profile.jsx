import React from 'react';
import moment from "moment";

const formatDate = date => moment(date).format("DD MMM YY");


const Profile = props => {
  return (
    <div className="greeting">
      <div className="profile__name">
    {props.user.firstName} {props.user.lastName}
    </div>
    <div className="profile__birth">
    Was born {formatDate(props.user.birthDate)} in {props.user.birthPlace}
    </div>
    </div>
  );
}

export default Profile;