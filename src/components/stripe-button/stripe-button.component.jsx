import React from "react";

import StripeCheckout from "react-stripe-checkout";


const StripeCheckoutButton=({price})=>{
    const priceForStripe = price *100 ;
    const publishablekey ='sk_test_51KOQ5iSGIQRSN2GnG9tcqAfXIzYzeJjjYuD6h1B3U0TpM6AYcCXEwhfaP2Gwh0mNTs0RjJ4vGs2wa2NYguyhXbh500izd56Omm'

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