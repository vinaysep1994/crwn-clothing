import React from "react";

import StripeCheckout from "react-stripe-checkout";


const StripeCheckoutButton=({price})=>{
    const priceForStripe = price *100 ;
    const publishablekey ='pk_test_51KOQ5iSGIQRSN2GnSIatWHOLWVETZoYSbBxBxPFVufAOP09EYlTgFSdISwtctnoS33TH5VCjLZAnijgA54NPtizP00iMhfuqw2'

     const onToken=token =>{
       console.log(token);
       alert('Payment Successful');
    }
    return (
        <StripeCheckout
         label="Pay Now"
         name = 'Crwn Clothing Ltd'
         billingAddress
         shippingAddress
         image=" "
         description={`Your total is $${price}`}
         amount={priceForStripe}
         panelLabel="Pay Now"
         token={onToken}
         stripeKey={publishablekey}
         
        />
    );
};

export default StripeCheckoutButton;