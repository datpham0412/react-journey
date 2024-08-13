import React from 'react'
import Avatar from './Avatar'

export default function Profile(props){
    return (
        <div className="card">
            <Avatar {...props} />
        </div>
    );
}
