import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Invoice from './pages/Invoice';
import InvoiceDetailsPage from './pages/InvoiceDetailPage';

function InvoicePageList() {
  let pageComponent
  switch (window.location.pathname) {
    case "/":
      pageComponent = <Invoice />
      break;
    default:
      pageComponent = <InvoiceDetailsPage />
      break;
  }

  return (
    <>
      {pageComponent}
    </>
  )
}

export default InvoicePageList;
