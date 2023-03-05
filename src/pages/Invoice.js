import React, { Component } from 'react'
import InvoiceTemplate from '../InvoiceTemplate'
import { getAllInvoice } from '../CommonAPIs/commonApis';

class Invoice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            templateList: []
        }
    }

    async componentDidMount () {
        let invoiceList = await getAllInvoice();
        this.setState({ templateList: invoiceList })
    }
    handleView = id => {
        window.location.pathname = `/${id}`;
    }
    render() {
        return (
            <div className="container-fluid my-5">
                <div className="row">
                    <div className="col-sm-8 mx-auto text-white shadow-lg p-3">
                        <div className="container-fluid">
                            <div className="container">
                                <h1 >Your Monthly Bills !!!</h1>
                                <ul className="list-unstyled row m-1">
                                    {
                                        this.state.templateList.map((value, i) => {
                                            return <InvoiceTemplate key={i} id={i} value={value} viewData={this.handleView} />
                                        })
                                    }
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }

}

export default Invoice;