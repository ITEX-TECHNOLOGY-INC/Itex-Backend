import tempController from "../controllers/tempController";
import checkouthandler from "../controllers/Checkout";

const routees = (app) => {

  app.route('/m').get(tempController)
  app.route('/checkout').post(checkouthandler).get(checkouthandler)
}

export default routees;