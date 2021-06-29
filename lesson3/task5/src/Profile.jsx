import React from 'react';
import moment from "moment";

const formatDate = date => moment(date).format("DD MMM YY");


const Profile = props => {
  console.log(props);
  return (
    <div className="greeting">
      <div className="profile__name">
     {props.userData.firstName} {props.userData.lastName}
      </div>
      <div className="profile__birth">
      Was born {formatDate(props.userData.birthDate)} in {props.userData.birthPlace}
      </div>
    </div>
  );
}

export default Profile;