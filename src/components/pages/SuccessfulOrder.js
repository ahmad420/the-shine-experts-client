import { Car as Logo } from '../../images/index';
import { BackBtn, LogoutBtn } from '../buttons/index';
import './Types.css';
import './SuccessfulOrder.css';
import { Barcode, Cash, Visa, Cancel } from '../../images/order/index.js';

const SuccessfulOrder = ({ history }) => {
  return (
    <div className="card">
      <div className="logo-div">
        <div>
          <BackBtn />
        </div>
        <div>
          <img className="logo" src={Logo} alt="car" />
        </div>
        <div>
          <LogoutBtn />
        </div>
      </div>
      <div className="content-div">
        <div className="barcode-div">
          <h2>Your Order has been saved successfully </h2>
          <img src={Barcode} alt="" />
          <h4>order number :23456789</h4>
        </div>
        <div className="pay-btns-div">
          <button className="pay-btn">
            <img src={Visa} alt="" />
            Pay Now
          </button>
          <button className="pay-btn">
            <img src={Cash} alt="" />
            Pay Cash
          </button>
          <button className="pay-btn">
            {' '}
            <img src={Cancel} alt="" />
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessfulOrder;
