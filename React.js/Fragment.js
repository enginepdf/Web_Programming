function items() {
    return (
        <div>   // wrapping elements with a parent element for JSX syntax
            <p>1</p>
            <p>2</p>
        </div>
    );
}


function items() {
    return [
        <p>1</p>,
        <p>2</p>
    ];
}


function items() {
    return (
        <React.Fragment>    // <></> or import React, {Fragment} from "react"; <Fragment></Fragment>
            <p>1</p>
            <p>2</p>
        </React.Fragment>
    );
}