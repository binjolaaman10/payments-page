import "./styles.css";
import tag from "../../Assets/Tag.svg";
import OverviewList from "./OverviewList";

function Overview() {
  return (
    <div className="sm:pt-6 md:pt-12">
      <div className="overview-title pb-4">Tickets overview</div>
      <OverviewList title="Cost Price" price="800" type="normal" />
      <OverviewList title="Shipping Charges" price="100" type="normal" />
      <OverviewList title="GST" price="10" type="normal" />
      <OverviewList title="Discount Applied" price="-32" type="discount" />
      <hr className="mt-4" />
      <div className="py-6 flex cursor-pointer">
        <img src={tag} alt="icon" />
        <span className="pl-1.5" style={{ color: "#006642" }}>
          Have a promo code?
        </span>
      </div>
      <hr />
      <div className="pt-2">
        <OverviewList title="Total Price" price="1200" type="total" />
        <div className="subtext">You will pay in ruppess.</div>
      </div>
      <div className="cancel-wrapper my-6">
        <div className="cancel-title"> Free cancellation</div>
        <div className="cancel-subtitle">
          Cancel before 24<sup>th</sup> for a full refund
        </div>
      </div>
    </div>
  );
}

export default Overview;
