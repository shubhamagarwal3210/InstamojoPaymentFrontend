import React from 'react';
function InvoiceTemplate(props) {
    return <>
        <li className="shadow p-2 my-2 col-sm-9">
            <h1>{props.value.purpose} : {props.value.status}</h1>
        </li>
        <button className="btn btn-danger my-2 col-sm-2 offset-1" onClick={() => { props.viewData(props.id) }}>View Invoice</button>
    </>
}

export default InvoiceTemplate;