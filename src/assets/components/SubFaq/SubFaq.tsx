import Faq from "./components/Faq.tsx";
import './subFaq.scss';

export interface IFaq {
    ask: string;
    answer: string;
    open: boolean;
}

export default function SubFaq() {

    const faqs: IFaq[] = [
        {
            ask: 'How often will I get a new bouquet?',
            answer: 'Our subscriptions allow you to select a delivery frequency that best suits your needs - either weekly, bi-weekly, or monthly. You can also choose the number of deliveries for your subscription. Choose any combination that works for you!',
            open: true
        },
        {
            ask: 'Can i send subscription like as a gift ?',
            answer: 'Our subscriptions allow you to select a delivery frequency that best suits your needs - either weekly, bi-weekly, or monthly. You can also choose the number of deliveries for your subscription. Choose any combination that works for you!',
            open: false
        },
        {
            ask: 'Can I choose which bouquet I get ?',
            answer: 'Our subscriptions allow you to select a delivery frequency that best suits your needs - either weekly, bi-weekly, or monthly. You can also choose the number of deliveries for your subscription. Choose any combination that works for you!',
            open: false
        },
        {
            ask: 'Can I change the shipping address ?',
            answer: 'Our subscriptions allow you to select a delivery frequency that best suits your needs - either weekly, bi-weekly, or monthly. You can also choose the number of deliveries for your subscription. Choose any combination that works for you!',
            open: false
        },
        {
            ask: 'What day will the subscription bouquet come?',
            answer: 'Our subscriptions allow you to select a delivery frequency that best suits your needs - either weekly, bi-weekly, or monthly. You can also choose the number of deliveries for your subscription. Choose any combination that works for you!',
            open: false
        },
        {
            ask: 'Can I suspend my subscription to flowers ?',
            answer: 'Our subscriptions allow you to select a delivery frequency that best suits your needs - either weekly, bi-weekly, or monthly. You can also choose the number of deliveries for your subscription. Choose any combination that works for you!',
            open: false
        }
    ]

    return <div className='sub-faq'>
        <div className="sub-faq__container">
            <h3 className="sub-faq__title">Subscription FAQ</h3>
            <dl className='sub-faq__list'>
                {faqs.map(i => <Faq faq={i} />)}
            </dl>
        </div>
    </div>
}