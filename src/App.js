import "./App.css";
import Header from "./Components/Header/Header";
import PageTitle from "./Components/PageTitle/PageTitle";
import Card from "./Components/Card/Card";
import Title from "./Components/Title/Title";
import Overview from "./Components/Overview/Overview";
import Input from "./Components/Input/Input";
import CreditCard from "./Assets/CreditCard.svg"
import Klarna from "./Assets/Klarna.svg"
import ShieldCheckered from "./Assets/ShieldCheckered.svg"
import FaqQuestions from "./Components/FaqQuestions/FaqQuestions";
import NeedHelpBox from "./Components/NeedHelpBox/NeedHelpBox";
import FeatureCard from "./Components/FeatureCard/FeatureCard";
import Footer from "./Components/Footer/Footer";
import CountryFlag from "./Components/CountryFlag/CountryFlag";

function App() {
  const subtexts = [
    `We'll be sending your tickets to the details below. Booking for a friend? Add their details.`,
    `We need a few more details to complete your reservation.`,
    `Payments with Tickete are secure and encrypted.`,
    `You will pay in <currency>`
  ];

  const faqQuestionObject = {
    "Are my tickets transferable?": "No. The tickets can only be used by the person(s) whose details are indicated on the voucher. If you’re booking for friends and family, make sure to key in their details.",
    "How long will it take to receive my ticket?": "The tickets will hit your inbox as soon as you complete making the payment.",
    "Is my payment secure?": "We use a PCI compliant payment gateway that is internationally recognized and protects against fraud and unauthorized transactions. In short, your payment is a 100% secure and you have nothing to worry!",
    "What type of payment options do you offer?": "We accept payments via all major international debit cards, credit cards, Google Pay and Apple Pay. Please note that Tickete being an online marketplace does not accept cash payments."
  }

  const ticketeFeature = {
    "CircleWavyCheck": [ "Official tickets", "Authorised reseller to top attraction" ],
    "ChatsCircle": [ "24/7 dedicated support", "We're here to help, talk to an expert" ],
    "CalendarBlank": [ "Flexible bookings", "Book stress-free with easy cancellation" ],
    "ShieldCheckeredBlue": [ "100% secure payments", "Internationally recognized encrypted payment process" ]
  };



  const traverseFaqQuestions = () => {
    return Object.keys(faqQuestionObject).map(title => {
      return (
        <div className="faqQuestions">
          <FaqQuestions textTitle={title} textDescription={faqQuestionObject[ title ]} />
        </div>
      );
    });
  };


  return (
    <div className="app">
      <Header />
      <div className="sm:flex sm:flex-col md:grid md:grid-cols-10 gap-4 sm:px-4 md:px-28 md:mt-24 sm:mt-6">
        <div className="md:col-span-7 md:order-1 sm:order-2 space-y-9">
          <div className="sm:hidden md:flex md:visible mb-9">
            <PageTitle />
          </div>
          <div className="details ">
            <Title text="Enter your details" subtext={subtexts[ 0 ]} />
            <div className="my-4 sm:flex sm:flex-col md:grid md:grid-cols-2 gap-6">
              <Input label="Full Name" defaultValue="Name" />
              <Input label="Phone Number" defaultValue="+91 8233134123" />
              <Input label="Email" defaultValue="mail@mail.com" />
              <Input label="Confirm Email" defaultValue="dummy" />
            </div>
          </div>
          <div className="additionalInfo">
            <Title text="Additional Information" subtext={subtexts[ 1 ]} />
            <div className="my-4 grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input label="Full Name" defaultValue="Name" />
              <Input label="Phone Number" defaultValue="+91 8233134123" />
            </div>
          </div>

          <div className="paymentMode">
            <Title text="Select your mode of payment" subtext={subtexts[ 2 ]} />
            <div className="my-6 flex flex-row justify-between max-w-full">
              <div className="cards flex justify-start">
                <img src={CreditCard} />
                <span className=" ml-2 sm:text-sm md:text-base">Credit & Debit Card</span>
              </div>
              <div className="flex justify-end">
                <input id="default-radio-1" type="radio" className="w-4 h-4 self-center accent-black " />
              </div>
            </div>
            <div className="my-4 grid grid-cols-1 md:grid-cols-2 gap-6">
              <CountryFlag />
              <Input label="Name on Card" defaultValue="Tickete" />
              <Input label="Card Number" defaultValue="XXXX XXXX XXX" />
              <Input label="Expiry Date" defaultValue="06/26" />
              <Input label="CVV/CVC" defaultValue="dummy" />
            </div>
            <hr />
            <div className="my-6 flex flex-row justify-between max-w-full">
              <div className="klarna flex justify-start">
                <img src={Klarna} />
                <span className=" ml-2 sm:text-sm md:text-base">Klarna</span>
              </div>
              <div className="flex justify-end ">
                <input id="default-radio-1" type="radio" className="w-4 h-4 self-center accent-black " />
              </div>
            </div>
            <hr />

          </div>

          <div className="totalPrice my-4">
            <Title text="Total Price" subtext={subtexts[ 3 ]} />
          </div>
          <div className="notification my-2 p-4 grid grid-flow-col justify-start gap-2">
            <input type="radio" className="w-4 h-4 self-center accent-black " />
            <span className="content-center col-span-9 text-xs font-semibold	">Receive travel tips, suggestions and offers in &lt;city&gt; by email</span>
          </div>
          <div className="tnc grid-rows-2 grid-flow-row-dense">
            <div className="row-span-1 my-4">
              <span className="row-span-1 text-xs leading-5">With payment, you agree to the general <a className="cursor-pointer text-[#1733B6] font-bold">terms and conditions of Tickete</a> & <a className="cursor-pointer  text-[#1733B6] font-bold">the activity provider</a>.</span>
            </div>
            <div className="row-span-1 my-1 ">
              <button className="bg-black hover:bg-black-700 text-white font-bold py-3 px-4 rounded-xl sm:w-full md:w-[197px]" >
                <div className="flex flex-row text-[16px] justify-center">
                  Confirm and pay
                  <img src={ShieldCheckered} className="w-4 h-4 self-center mx-2" />
                </div>
              </button>
            </div>
          </div>

        </div>
        <div className="md:col-span-3 md:order-2 sm:order-1">
          <div className="sm:visible md:hidden">
            <PageTitle />
          </div>

          <Card />
          <hr />
          <Overview />
        </div>
      </div>
      <hr className="m-5" style={{ width: "85%", margin: "15px auto 30px" }} />
      <div className="sm:flex sm:flex-col md:grid md:grid-cols-10 gap-4 sm:px-6 md:px-28 md:mt-24 sm:mt-6">
        <div className="md:col-span-7 flex flex-col gap-4">
          <Title text="Frequently asked questions" />
          {traverseFaqQuestions()}
        </div>
        <div className="md:col-span-3">
          <NeedHelpBox />
        </div>
      </div>
      <hr style={{ margin: "auto", width: "80%" }} />
      <div className="theTicketePromise flex flex-col gap-4 sm:px-6 md:px-28 md:mt-12 sm:mt-6">
        <div>
          <Title text="The Tickete Promise" />
        </div>
        <div className="ticketeFeatures flex flex-row flex-wrap md:gap-8">
          {Object.keys(ticketeFeature).map((logoKey) => {
            const title = ticketeFeature[ logoKey ];
            return (
              <FeatureCard logo={logoKey} text={ticketeFeature[ logoKey ][ 0 ]} subtext={ticketeFeature[ logoKey ][ 1 ]} />
            );
          })}
        </div>
      </div>
      <Footer />

    </div>
  );
}

export default App;
