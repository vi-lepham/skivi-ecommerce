import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51GzoOiJTZZwpATVhajL7aOOORQHxMeXQlDqinhKOp4QtoJm2QIAdYPJcMTd7Sl8Zq702xU2eDeFAf564Tc4VGwSO00oaw23KWP';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful!');
    }

    return (
        <StripeCheckout 
            label='Pay With Card'
            name='Skivi Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;