import React, { Component } from 'react'
import '../.././node_modules/bootstrap/dist/css/bootstrap.min.css'
import { getAllInvoice } from '../CommonAPIs/commonApis';
import InvoiceDetailsArray from '../InvoiceDetailsArray';

class InvoiceDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contactList: InvoiceDetailsArray,
            id : 0,
        }
    }
    async componentDidMount () {
        let invoiceList = await getAllInvoice();
        this.setState({ contactList: invoiceList })
        this.setState({ id: window.location.pathname.replace("/", "") })
    }

    handlePayment = async (billingUrl) => {
        window.location.replace(billingUrl, '_blank');
    }
    render() {
        const data = this.state.contactList[this.state.id];
        const isPaid = data.status === "Credit";
        return (
            <div className="container-fluid my-5">
                <div className="row">
                    <div className="col-sm-8 mx-auto text-white shadow-lg p-4" >
                        <h2 className='col-sm-10'> Name : {data.buyer_name} </h2>
                        <h2 className='col-sm-10'> Amount : Rs {data.amount}   </h2>
                        <h2 className='col-sm-10'> Email : {data.email}  </h2>
                        <h2 className='col-sm-10'> Id : {data.id}  </h2>
                        <h2 className='col-sm-10'> Contact : {data.phone}  </h2>
                        <h2 className='col-sm-10'> Description : {data.purpose}  </h2>
                        <h2 className='col-sm-10'> Status : {data.status}  </h2>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-2">
                                    <button className="btn btn-warning px-3 font-weight-bold align-items-right" disabled={isPaid} onClick={() => {
                                        this.handlePayment(data.longurl)
                                    }}>{data.status === "Credit" ? "Paid" : "Pay Now" }</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default InvoiceDetails;
