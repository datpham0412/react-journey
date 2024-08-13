import React from 'react'

function Avatar({src, alt, width, height}){
    return (
        <img 
            className="avatar"
            src={src}
            alt={alt}
            width={width}
            height={height}
        />
    );
}
export default Avatar;