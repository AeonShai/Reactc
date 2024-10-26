import React from 'react';
import Proptypes from 'prop-types';

function User({ name, surname, isLoggedin, friends, age, address }) {
    return (
        <>
            <h1>
                {isLoggedin ? `Welcome ${name} ${surname} (${age})` : "Please log in"}
            </h1>
             {address.title} {address.city}
             <br />
             <br />
            {
                friends.map((friends, id) => (
                    <p key={id}>{friends.id}-{friends.name}</p>
                ))
            }
        </>
    );
}

User.propTypes = {
    name: Proptypes.string.isRequired,
    surname: Proptypes.string.isRequired,
    age: Proptypes.oneOfType([Proptypes.string, Proptypes.number]).isRequired,
    isLoggedin: Proptypes.bool.isRequired,
    friends: Proptypes.array.isRequired,
    address: Proptypes.shape({
        title: Proptypes.string,
        city: Proptypes.string
    })
};

User.defaultProps = {
    isLoggedin: false,
}

export default User;