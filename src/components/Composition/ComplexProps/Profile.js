import React from 'react'
import Avatar from './Avatar'

export default function Profile(){
    return (
        <div>
            <Avatar 
                size={100}
                person={{
                    name: 'Dat Pham',
                    imageId : 'fewfwf'
                }}
            />
            <Avatar 
                size={200}
                person={{
                    name: "Naot Zoaib",
                    imageId: 'efwef'
                }}
            />
            <Avatar 
                size={50}
                person={{
                    name: "Sxard",
                    imageId: 'fewfew'
                }}
            />
        </div>
    );
}