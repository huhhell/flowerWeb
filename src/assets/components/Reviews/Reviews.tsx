import './reviews.scss';
import googleImg from './images/google.svg';
import prevArrowImg from './images/left.svg';
import nextArrowImg from './images/right.svg';
import {useState} from "react";

interface IReview {
    author: string;
    text: string;
}

const reviews: IReview[] = [
    {
        author: 'Ronald Richards',
        text: '“Ordered flowers online and they were the best bouquet! Impressed everyone around. Highly recommend this flower shop!“'
    },
    {
        author: 'Kate Smiths',
        text: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo at quam efficitur convallis. Sed varius lorem eget libero finibus.“'
    },
    {
        author: 'Jane Doe',
        text: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus ligula, commodo quis lectus vitae, pulvinar tincidunt.“'
    },
    {
        author: 'Michar Pussinsky',
        text: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus cursus dolor, sed molestie dolor.“'
    },
    {
        author: 'Kate Moss',
        text: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla congue vel metus a imperdiet. Suspendisse molestie urna ac risus tincidunt“'
    },
]

export default function Reviews() {
    const [indexOfReview, setIndexOfReview] = useState(0);
    let dots: boolean[] = [];
    for (let i = 0; i < reviews.length; i++) {
        i === indexOfReview ? dots.push(true) : dots.push(false)
    }

    function prevReviewHandler() {
        if (indexOfReview === 0) {
            setIndexOfReview(reviews.length - 1);
        } else {
            setIndexOfReview(indexOfReview - 1)
        }
    }

    function nextReviewHandler() {
        if (indexOfReview === reviews.length - 1) {
            setIndexOfReview(0);
        } else {
            setIndexOfReview(indexOfReview + 1)
        }
    }

    return <div className='reviews'>
        <img src={googleImg} alt="google" className="reviews__logo"/>
        <p className="reviews__subtitle">reviews</p>
        <h3 className="reviews__title">Our Clients say</h3>
        <div className="reviews__item">
            <button className="reviews__item-prev" onClick={prevReviewHandler}>
                <img src={prevArrowImg} alt="prev review" className="reviews__item-prev-img"/>
            </button>
            <div className="reviews__item-content">
                <p className="reviews__item-text">{reviews[indexOfReview].text}</p>
                <p className="reviews__item-author">–{reviews[indexOfReview].author}</p>
            </div>
            <button className="reviews__item-next" onClick={nextReviewHandler}>
                <img src={nextArrowImg} alt="next review" className="reviews__item-next-img"/>
            </button>
        </div>
        <div className="reviews__dots">
            {dots.map(i => i ? <div className='reviews__dots-item-active'></div> : <div className='reviews__dots-item'></div>)}
        </div>
        <a href="#" className="reviews__all">Read reviews</a>
    </div>
}