import React from 'react';
import "./text.css"

const Text = ({label}) => {
    // const obj = {
    //     key: "123",
    //     key2: "345"
    // }
    //
    // const {key} = obj
    // const key2 = obj.key2
    // console.log(key)

    if(!label) return <p>ERROR!!!!</p>

    return (
        <p className="text">
            {label}
        </p>
    );
};

export default Text;