import Stripe from 'stripe';
const stripe = new Stripe('sk_test_51JVHquBBUtcnA4x3kfz0ZXLw5gzpTq5N6Ni5kHBBlsHue93gQhjtOrv55lEJdYEPhEokNZ6w3fOooehlrJR19Yw200XIu0krtn');

const checkouthandler = async(req, res) => {

  const product = await stripe.products.create({
    name: 'T-shirt',
  });

  const price = await stripe.prices.create({
    product: product.id,
    unit_amount: 2,
    currency: 'cad',
  });

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          // TODO: replace this with the `price` of the product you want to sell
          price: price.id,
          quantity: 1,
        },
      ],
      payment_method_types: [
        'card'
      ],
      mode: 'payment',
      success_url: `https://www.google.com`,
      cancel_url: `https://www.facebook.com`,
    });
    res.redirect(303, session.url)
}

export default checkouthandler;