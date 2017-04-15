import React from 'react';
 
class UserProfileView extends React.Component {
  render() {
    let user = this.props.user;
    return (
      <div>
        <img src={user.photo}></img>
        <h2>{user.name}</h2>
        <h3>{user.location}</h3>
        <p>{user.gender} | {user.birthday}</p>
        <h4>Biography</h4>
        <p>{user.bio}</p>

        <h2>Your Listing</h2>
        {
          user.objects.map((object) => 
          <h3>{object.name}</h3>
        )}

      </div>
    );
  }
}

class UserProfile extends React.Component {
  render() {
    let users = this.props.users;
    let id = this.props.id;
    let thisUser = this.props.users.find((user)=>{
      return user.id==id
    })

    return (
      <UserProfileView user={thisUser} />
    );
  }
}

export default UserProfile