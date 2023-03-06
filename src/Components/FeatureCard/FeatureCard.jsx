import React from 'react';
import CircleWavyCheck from "../../Assets/CircleWavyCheck.svg";
import ChatsCircle from "../../Assets/ChatsCircle.svg";
import CalendarBlank from "../../Assets/CalendarBlank.svg";
import ShieldCheckeredBlue from "../../Assets/ShieldCheckeredBlue.svg";
import PageTitle from '../Title/Title';

function FeatureCard(props) {
    const logo = props.logo;
    const text = props.text;
    const subtext = props.subtext;

    let logoImage;
    if (logo === "CircleWavyCheck") {
        logoImage = CircleWavyCheck;
    } else if (logo === "ChatsCircle") {
        logoImage = ChatsCircle;
    } else if (logo === "CalendarBlank") {
        logoImage = CalendarBlank;
    } else if (logo === "ShieldCheckeredBlue") {
        logoImage = ShieldCheckeredBlue;
    }

    return (
        <div className='sm:flex sm:flex-row md:grid sm:w-full sm:border-white border md:border-[#D6D6D6] rounded-xl md:max-w-[282px] md:min-h-[200px]'>
            <div className='logo p-5 self-center'>
                <img className="sm:w-6 sm:h-6 md:w-12 md:h-12" src={logoImage} alt={logo} />
            </div>
            <div className='flex flex-col flex-wrap description p-5'>
                <div className='flex flex-row flex-wrap justify-between text-[#595959] text-[16px] font-semibold'>
                    {text}
                </div>
                <div className='flex flex-row flex-wrap justify-between text-[#595959] text-[14px] font-normal'>
                    {subtext}
                </div>
            </div>
        </div>
    );
}

export default FeatureCard;
