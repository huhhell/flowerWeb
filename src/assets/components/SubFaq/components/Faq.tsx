import arrowImg from "../images/arrow-bottom-right.svg";
import {IFaq} from "../SubFaq.tsx";
import {useState} from "react";

interface IProps {
    faq: IFaq;
}

export default function Faq({faq}: IProps) {
    const [isOpen, setIsOpen] = useState(faq.open || false);
    const toggle = () => setIsOpen(!isOpen)


    return <div className='sub-faq__item'>
        <dt aria-expanded={isOpen} className="sub-faq__ask" onClick={toggle}>
            {faq.ask}
            <img src={arrowImg}
                 alt={isOpen ? 'Collapse' : 'Expand'}
                 className={isOpen ? 'sub-faq__arrow-open' : 'sub-faq__arrow'}/>
        </dt>
        <dd className={isOpen ? "sub-faq__answer" : "sub-faq__answer-hidden"}>{faq.answer}</dd>
    </div>
}