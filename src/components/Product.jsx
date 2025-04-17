import React, { useContext, useEffect } from 'react';
import { AppContext } from '../App';
import { ToastContainer } from 'react-toastify';

import productImg01 from "/src/assets/Images/double-sofa-01.png";
import productImg02 from "/src/assets/images/double-sofa-02.png";
import productImg03 from "/src/assets/images/double-sofa-03.png";

import productImg04 from "/src/assets/Images/single-sofa-04.png";
import productImg05 from "../assets/Images/single-sofa-02.jpg";
import productImg06 from "/src/assets/Images/single-sofa-03.jpg";
import productImg007 from "/src/assets/Images/arm-chair-01.jpg";
import productImg07 from "/src/assets/Images/arm-chair-01.jpg";
import productImg08 from "/src/assets/Images/arm-chair-02.jpg";
import productImg09 from "/src/assets/Images/arm-chair-03.jpg";
import productImg10 from "/src/assets/Images/arm-chair-01.jpg";

import phone01 from "/src/assets/Images/phone-01.jpg";
import phone02 from "/src/assets/Images/phone-02.jpg";
import phone03 from "/src/assets/Images/phone-03.png";
import phone04 from "/src/assets/Images/phone-04.jpg";
import phone05 from "/src/assets/Images/phone-05.jpg";
import phone06 from "/src/assets/Images/phone-06.jpg";
import phone08 from "/src/assets/Images/phone-08.png";

import watch01 from "/src/assets/Images/watch-01.jpg";
import watch02 from "/src/assets/Images/watch-02.jpg";
import watch03 from "/src/assets/Images/watch-03.jpg";
import watch04 from "/src/assets/Images/watch-04.jpg";

import wireless01 from "/src/assets/Images/wireless-01.png";
import wireless02 from "/src/assets/Images/wireless-02.png";
import wireless03 from "/src/assets/Images/wireless-03.png";
import wireless04 from "/src/assets/Images/wireless-04.png";

import sofaSlide from "/src/assets/Images/hero-img.png";
import watchSlide from "/src/assets/Images/watch-07.png";

// import './styles.css'
export default function Productpage() {
    const { products, setProducts, addtocart } = useContext(AppContext);
    const SliderData = [
        {
            id: 1,
            imgUrl: productImg03,
            title: "50% Off For Your First Shopping",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
            cover: sofaSlide, // Using the imported sofaSlide
        },
        {
            id: 2,
            imgUrl: productImg02,
            title: "50% Off For Your First Shopping",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
            cover: phone08, // Now using the imported phone08
        },
        {
            id: 3,
            imgUrl: productImg03,
            title: "50% Off For Your First Shopping",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
            cover: wireless01,
        },
        {
            id: 4,
            imgUrl: productImg02,
            title: "50% Off For Your First Shopping",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
            cover: watchSlide, // Using the imported watchSlide
        },
    ];

    const serviceData = [
        {
            icon: <ion-icon name="car"></ion-icon>,
            title: "Free Shipping",
            subtitle: "Lorem ipsum dolor sit amet.",
            bg: "#fdefe6",
        },
        {
            icon: <ion-icon name="card"></ion-icon>,
            title: "Safe Payment",
            subtitle: "Lorem ipsum dolor sit amet.",
            bg: "#ceebe9",
        },
        {
            icon: <ion-icon name="shield-half-outline"></ion-icon>,
            title: "Secure Payment",
            subtitle: "Lorem ipsum dolor sit amet.",
            bg: "#e2f2b2",
        },
        {
            icon: <ion-icon name="headset"></ion-icon>,
            title: " Back Guarantee",
            subtitle: "Lorem ipsum dolor sit amet.",
            bg: "#d6e5fb",
        },
    ];
    const discountProducts = [
        {
            id: "01",
            productName: "Stone and Beam Westview ",
            imgUrl: productImg01,
            category: "sofa",
            price: 193,
            discount: 30,
            shortDesc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
            reviews: [
                {
                    rating: 4.7,
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
            ],
            avgRating: 4.5,
        },
        {
            id: "02",
            productName: "Rivet Bigelow Modern ",
            imgUrl: productImg02,
            category: "sofa",
            price: 253,
            discount: 20,
            shortDesc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
            reviews: [
                {
                    rating: 4.8,
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
                {
                    rating: 4.8,
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
            ],
            avgRating: 4.7,
        },
        {
            id: "08",
            productName: "Baltsar Chair",
            imgUrl: productImg08,
            category: "chair",
            price: 89,
            discount: 15,
            shortDesc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
            reviews: [
                {
                    rating: 4.6,
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
                {
                    rating: 4.9,
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
            ],
            avgRating: 4.7,
        },
        {
            id: "09",
            productName: "Helmar Chair",
            imgUrl: productImg09,
            category: "chair",
            price: 112,
            discount: 35,
            shortDesc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
            reviews: [
                {
                    rating: 4.6,
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
                {
                    rating: 4.9,
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
            ],
            avgRating: 4.7,
        },
        {
            id: "12",
            productName: "Realme 8",
            imgUrl: phone03,
            category: "mobile",
            price: 599,
            discount: 10,
            shortDesc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
            reviews: [
                {
                    rating: 4.8,
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
                {
                    rating: 4.9,
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
            ],
            avgRating: 4.8,
        },
        {
            id: "13",
            productName: "One Plus Nord",
            imgUrl: phone04,
            category: "mobile",
            price: 799,
            discount: 5,
            shortDesc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
            reviews: [
                {
                    rating: 4.8,
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
                {
                    rating: 4.9,
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
            ],
            avgRating: 4.8,
        },

    ]
    useEffect(() => {
        setProducts([
            {
                id: "01",
                productName: "Stone and Beam Westview ",
                imgUrl: productImg01,
                category: "sofa",
                price: 193,
                shortDesc:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
                reviews: [
                    {
                        rating: 4.7,
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    },
                ],
                avgRating: 4.5,
            },

            {
                id: "02",
                productName: "Rivet Bigelow Modern ",
                imgUrl: productImg02,
                category: "sofa",
                price: 253,
                shortDesc:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
                reviews: [
                    {
                        rating: 4.8,
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    },
                    {
                        rating: 4.8,
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    },
                ],
                avgRating: 4.7,
            },

            {
                id: "03",
                productName: "Amazon Brand Modern Sofa",
                imgUrl: productImg03,
                category: "sofa",
                price: 173,
                shortDesc:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
                reviews: [
                    {
                        rating: 4.6,
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    },
                    {
                        rating: 4.9,
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    },
                ],
                avgRating: 4.7,
            },
            {
                id: "26",
                productName: "Rivet Bigelow Modern ",
                imgUrl: productImg02,
                category: "sofa",
                price: 253,
                shortDesc:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
                reviews: [
                    {
                        rating: 4.8,
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    },
                    {
                        rating: 4.8,
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    },
                ],
                avgRating: 4.7,
            },
            {
                id: "04",
                productName: "Fllufy Sheep Sofa",
                imgUrl: productImg04,
                category: "sofa",
                price: 163,
                shortDesc:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
                reviews: [
                    {
                        rating: 4.6,
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    },
                    {
                        rating: 4.9,
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    },
                ],
                avgRating: 4.7,
            },

            {
                id: "05",
                productName: "Faux Velvet Sofa",
                imgUrl: productImg05,
                category: "sofa",
                price: 163,
                shortDesc:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
                reviews: [
                    {
                        rating: 4.6,
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    },
                    {
                        rating: 4.9,
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    },
                ],
                avgRating: 4.7,
            },

            {
                id: "06",
                productName: "Fllufy Sheep Sofa",
                imgUrl: productImg06,
                category: "sofa",
                price: 163,
                shortDesc:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
                reviews: [
                    {
                        rating: 4.6,
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    },
                    {
                        rating: 4.9,
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    },
                ],
                avgRating: 4.7,
            },
            {
                id: "07",
                productName: "Sakarias Armchair",
                imgUrl: productImg07,
                category: "chair",
                price: 99,
                shortDesc:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
                reviews: [
                    {
                        rating: 4.6,
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    },
                    {
                        rating: 4.9,
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    },
                ],
                avgRating: 4.7,
            },

            {
                id: "27",
                productName: "Modern Arm Sofa",
                imgUrl: productImg007,
                category: "sofa",
                price: 173,
                shortDesc:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
                reviews: [
                    {
                        rating: 4.6,
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    },
                    {
                        rating: 4.9,
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    },
                ],
                avgRating: 4.7,
            },

            {
                id: "08",
                productName: "Baltsar Chair",
                imgUrl: productImg08,
                category: "chair",
                price: 89,
                shortDesc:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
                reviews: [
                    {
                        rating: 4.6,
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    },
                    {
                        rating: 4.9,
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    },
                ],
                avgRating: 4.7,
            },

            {
                id: "09",
                productName: "Helmar Chair",
                imgUrl: productImg09,
                category: "chair",
                price: 112,
                shortDesc:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
                reviews: [
                    {
                        rating: 4.6,
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    },
                    {
                        rating: 4.9,
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    },
                ],
                avgRating: 4.7,
            },

            {
                id: "10",
                productName: "Apple iPhone 12 Pro",
                imgUrl: phone01,
                category: "mobile",
                price: 799,
                shortDesc:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
                reviews: [
                    {
                        rating: 4.8,
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    },
                    {
                        rating: 4.9,
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    },
                ],
                avgRating: 4.8,
            },
            {
                id: "25",
                productName: "Sakarias Armchair",
                imgUrl: productImg10,
                category: "chair",
                price: 99,
                shortDesc:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
                reviews: [
                    {
                        rating: 4.6,
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    },
                    {
                        rating: 4.9,
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    },
                ],
                avgRating: 4.7,
            },
            {
                id: "11",
                productName: "Apple iPhone 12 Max",
                imgUrl: phone02,
                category: "mobile",
                price: 799,
                shortDesc:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
                reviews: [
                    {
                        rating: 4.8,
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    },
                    {
                        rating: 4.9,
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    },
                ],
                avgRating: 4.8,
            },

            {
                id: "12",
                productName: "Realme 8",
                imgUrl: phone03,
                category: "mobile",
                price: 599,
                shortDesc:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
                reviews: [
                    {
                        rating: 4.8,
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    },
                    {
                        rating: 4.9,
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    },
                ],
                avgRating: 4.8,
            },

            {
                id: "13",
                productName: "One Plus Nord",
                imgUrl: phone04,
                category: "mobile",
                price: 799,
                shortDesc:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
                reviews: [
                    {
                        rating: 4.8,
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    },
                    {
                        rating: 4.9,
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    },
                ],
                avgRating: 4.8,
            },

            {
                id: "14",
                productName: "Apple iPhone 13 Pro",
                imgUrl: phone05,
                category: "mobile",
                price: 899,
                shortDesc:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
                reviews: [
                    {
                        rating: 4.8,
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    },
                    {
                        rating: 4.9,
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    },
                ],
                avgRating: 4.8,
            },

            {
                id: "15",
                productName: "Samsung Galaxy S22",
                imgUrl: phone06,
                category: "mobile",
                price: 699,
                shortDesc:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
                reviews: [
                    {
                        rating: 4.8,
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    },
                    {
                        rating: 4.9,
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    },
                ],
                avgRating: 4.8,
            },

            {
                id: "16",
                productName: "Rolex Watch",
                imgUrl: watch01,
                category: "watch",
                price: 299,
                shortDesc:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
                reviews: [
                    {
                        rating: 4.8,
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    },
                    {
                        rating: 4.9,
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    },
                ],
                avgRating: 4.8,
            },

            {
                id: "17",
                productName: "Timex Easy Reader Watch",
                imgUrl: watch02,
                category: "watch",
                price: 299,
                shortDesc:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
                reviews: [
                    {
                        rating: 4.8,
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    },
                    {
                        rating: 4.9,
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    },
                ],
                avgRating: 4.8,
            },

            {
                id: "18",
                productName: "Rolex Watch",
                imgUrl: watch03,
                category: "watch",
                price: 299,
                shortDesc:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
                reviews: [
                    {
                        rating: 4.8,
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    },
                    {
                        rating: 4.9,
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    },
                ],
                avgRating: 4.8,
            },

            {
                id: "19",
                productName: "Apple Watch",
                imgUrl: watch04,
                category: "watch",
                price: 399,
                shortDesc:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
                reviews: [
                    {
                        rating: 4.8,
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    },
                    {
                        rating: 4.9,
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    },
                ],
                avgRating: 4.8,
            },

            {
                id: "20",
                productName: "Beat Studio Wireless",
                imgUrl: wireless01,
                category: "wireless",
                price: 199,
                shortDesc:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
                reviews: [
                    {
                        rating: 4.8,
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    },
                    {
                        rating: 4.9,
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    },
                ],
                avgRating: 4.8,
            },

            {
                id: "21",
                productName: "Beat EP Headphones",
                imgUrl: wireless03,
                category: "wireless",
                price: 199,
                shortDesc:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
                reviews: [
                    {
                        rating: 4.8,
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    },
                    {
                        rating: 4.9,
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    },
                ],
                avgRating: 4.8,
            },
            {
                id: "22",
                productName: "Black Headphones",
                imgUrl: wireless02,
                category: "wireless",
                price: 169,
                shortDesc:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
                reviews: [
                    {
                        rating: 4.8,
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    },
                    {
                        rating: 4.9,
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    },
                ],
                avgRating: 4.8,
            },
            {
                id: "23",
                productName: "Bluetooth Headphones",
                imgUrl: wireless04,
                category: "wireless",
                price: 139,
                shortDesc:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
                reviews: [
                    {
                        rating: 4.8,
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    },
                    {
                        rating: 4.9,
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    },
                ],
                avgRating: 4.8,
            },

        ]
        )
    }, [])
    return (
        <div className="container-fluid px-0 mt-5">
            <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
            />
            {/* Carousel Section */}
            <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-bs-ride="carousel"
                data-bs-interval="3000"
            >
                <div className="carousel-indicators">
                    {SliderData.map((slide, index) => (
                        <button
                            key={slide.id}
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to={index}
                            className={index === 0 ? 'active' : ''}
                            aria-current={index === 0 ? 'true' : 'false'}
                            aria-label={`Slide ${index + 1}`}
                        ></button>
                    ))}
                </div>
                <div className="carousel-inner" style={{ height: '450px', marginTop: '100px' }}>
                    {SliderData.map((slide, index) => (
                        <div
                            key={slide.id}
                            className={`carousel-item ${index === 0 ? 'active' : ''}`}
                        >
                            <div className="container d-flex justify-items-center align-items-center justify-content-center flex-column flex-lg-row">
                                <div className="text-container text-center text-lg-start mb-3 mb-lg-0">
                                    <h1 className="display-4">{slide.title}</h1>
                                    <p className="lead">{slide.desc}</p>
                                    <p>Visit collections</p>
                                </div>
                                <div className="carousel-image mt-3 mt-lg-0">
                                    <img src={slide.imgUrl} alt={`Slide ${index + 1}`} className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* Services Section */}
            <div className="row gy-4 mt-4">
                {serviceData.map((service, index) => (
                    <div
                        key={index}
                        className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-evenly align-items-center"
                    >
                        <div
                            className="card text-center d-flex justify-content-center align-items-center"
                            style={{ backgroundColor: service.bg, border: 'none' }}
                        >
                            <div className="card-body text-center">
                                <div className="display-4 text-primary mb-3">{service.icon}</div>
                                <h5 className="card-title fw-bold">{service.title}</h5>
                                <p className="card-text text-muted">{service.subtitle}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Big Discount Section */}
            <div className="container mt-4">
                <div className="row gy-4">
                    <h1 className="text-center w-100">Big Discount</h1>
                    {discountProducts.map((product, index) => (
                        <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div className="card position-relative h-100 hover-card">
                                <div
                                    className="btn text-white position-absolute top-0 start-0"
                                    style={{
                                        backgroundColor: 'rgb(9, 121, 105)',
                                        borderRadius: '8px',
                                        margin: '8px',
                                        padding: '4px 8px',
                                    }}
                                >
                                    {product.discount}% off
                                </div>
                                <i
                                    className="far fa-heart text-dark position-absolute heart-icon"
                                    style={{
                                        fontSize: '20px',
                                        top: '8px',
                                        right: '16px',
                                    }}
                                ></i>
                                <img
                                    src={product.imgUrl}
                                    alt={product.productName}
                                    className="card-img-top"
                                    style={{ height: '150px', objectFit: 'contain' }}
                                />
                                <div className="card-body text-center">
                                    <h5 className="card-title">{product.productName.slice(0, 20)}</h5>
                                    <div>
                                        {[...Array(5)].map((_, index) => (
                                            <i key={index} className="fas fa-star" style={{ color: 'gold' }}></i>
                                        ))}
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center mt-2">
                                        <h4 className="card-text mb-0">${product.price}</h4>
                                        <button
                                            className="btn rounded-circle" id='plus-icon'
                                            onClick={() => addtocart(product.id)}
                                        >
                                            <i className="fas fa-plus"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* New Arrivals Section */}
                <div className="row gy-4 mt-4">
                    <h1 className="text-center w-100">New Arrivals</h1>
                    {products
                        .filter((product) => product.category === 'mobile')
                        .map((product, index) => (
                            <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
                                <div className="card position-relative h-100 hover-card">
                                    <i
                                        className="far fa-heart text-dark position-absolute heart-icon"
                                        style={{
                                            fontSize: '20px',
                                            top: '8px',
                                            right: '16px',
                                        }}
                                    ></i>
                                    <img
                                        src={product.imgUrl}
                                        alt={product.productName}
                                        className="card-img-top"
                                        style={{ height: '150px', objectFit: 'contain' }}
                                    />
                                    <div className="card-body text-center">
                                        <h5 className="card-title">{product.productName.slice(0, 20)}</h5>
                                        <div>
                                            {[...Array(5)].map((_, index) => (
                                                <i key={index} className="fas fa-star" style={{ color: 'gold' }}></i>
                                            ))}
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center mt-2">
                                            <h4 className="card-text mb-0">${product.price}</h4>
                                            <button
                                                className="btn rounded-circle" id='plus-icon'
                                                onClick={() => addtocart(product.id)}
                                            >
                                                <i className="fas fa-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>

                {/* Best Sales Section */}
                <div className="row gy-4 mt-4">
                    <h1 className="text-center w-100">Best Sales</h1>
                    {products
                        .filter((product) => product.category === 'sofa')
                        .map((product, index) => (
                            <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
                                <div className="card position-relative h-100 hover-card">
                                    <i
                                        className="far fa-heart text-dark position-absolute heart-icon"
                                        style={{
                                            fontSize: '20px',
                                            top: '8px',
                                            right: '16px',
                                        }}
                                    ></i>
                                    <img
                                        src={product.imgUrl}
                                        alt={product.productName}
                                        className="card-img-top"
                                        style={{ height: '150px', objectFit: 'contain' }}
                                    />
                                    <div className="card-body text-center">
                                        <h5 className="card-title">{product.productName.slice(0, 20)}</h5>
                                        <div>
                                            {[...Array(5)].map((_, index) => (
                                                <i key={index} className="fas fa-star" style={{ color: 'gold' }}></i>
                                            ))}
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center mt-2">
                                            <h4 className="card-text mb-0">${product.price}</h4>
                                            <button
                                                className="btn rounded-circle" id='plus-icon'
                                                onClick={() => addtocart(product.id)}
                                            >
                                                <i className="fas fa-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}