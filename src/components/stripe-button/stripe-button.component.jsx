import React from "react";
import StripeCheckout from "react-stripe-checkout";
import Logo from "../../assets/iv-trans-transGaps.svg";
const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_KB45Ur2JUTFPQPTzssrh4aCa001SLrHoW5";
  const onToken = token => {
    console.log(token);
    alert("payment successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Vehement Inc."
      billingAddress
      shippingAddress
      image={Logo}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};
export default StripeCheckoutButton;
