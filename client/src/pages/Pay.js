import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

const KEY = "pk_test_51LW00pLplrJ17jtVYzDY9T3I6Yba97b7bPWN64ZDowKQulVe6tPUIALtCNR5d4Hd93l3fOOtr7E2UiPOqLwLdenq00sZtcp41V"


const Pay = () => {
    return (
        <div
            style={{
                height: "100vh",
                display: 'flex',
                alignItems: "center",
                justifyContent: "center"
            }}>
            <StripeCheckout
                name="Three Comma Co." // the pop-in header title
                description="Big Data Stuff" // the pop-in header subtitle
                image="https://www.vidhub.co/assets/logos/vidhub-icon-2e5c629f64ced5598a56387d4e3d0c7c.png" // the pop-in header image (default none)
            >
                <button
                    style={{
                        border: "none",
                        width: "120",
                        borderRadius: 5,
                        padding: "20px",
                        background: "black",
                        color: "white",
                        fontWeight: "600",
                        cursor: "pointer"
                    }}>
                    Pay Now
                </button>
            </StripeCheckout>
        </div>
    )
}

export default Pay