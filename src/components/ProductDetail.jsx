import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { AppContext } from '../App';
import { ToastContainer } from 'react-toastify';

import productImg01 from "/src/assets/Images/double-sofa-01.png";
import productImg02 from "/src/assets/images/double-sofa-02.png";
import productImg03 from "/src/assets/images/double-sofa-03.png";
import productImg05 from "/src/assets/Images/single-sofa-01.jpg";
import productImg06 from "/src/assets/Images/single-sofa-02.jpg";


import productImg007 from "/src/assets/Images/single-sofa-04.png";
import productImg07 from "/src/assets/Images/arm-chair-01.jpg";
import productImg08 from "/src/assets/Images/arm-chair-02.jpg";
import productImg09 from "/src/assets/Images/arm-chair-03.jpg";
import productImg10 from "/src/assets/Images/arm-chair-01.jpg";
import table from '/src/assets/Images/table.jpg';

import phone01 from "/src/assets/Images/phone-01.jpg";
import phone02 from "/src/assets/Images/phone-02.jpg";
import phone03 from "/src/assets/Images/phone-03.png";
import phone04 from "/src/assets/Images/phone-04.jpg";
import phone05 from "/src/assets/Images/phone-05.jpg";
import phone06 from "/src/assets/Images/phone-06.jpg";

import watch01 from "/src/assets/Images/watch-01.jpg";
import watch02 from "/src/assets/Images/watch-02.jpg";
import watch03 from "/src/assets/Images/watch-03.jpg";
import watch04 from "/src/assets/Images/watch-04.jpg";

import wireless01 from "/src/assets/Images/wireless-01.png";
import wireless02 from "/src/assets/Images/wireless-02.png";
import wireless03 from "/src/assets/Images/wireless-03.png";
import wireless04 from "/src/assets/Images/wireless-04.png";

export default function ProductDetail() {
    const { products, setProducts, addtocart, qty, handleQty } = useContext(AppContext);
    const location = useLocation();
    const { product } = location.state || {}
    const [activeTab, setActiveTab] = useState('description');
    const handleClick = (tab) => {
        setActiveTab(tab);
    }
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
    }, [setProducts])
    return (
        <div className="container-fluid py-4" style={{ marginTop: '20px' }}>
            <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
            />
            <div
                id="ctn"
                className="d-flex justify-content-center align-items-center text-white"
                style={{
                    backgroundImage: `url(${table})`,
                    backgroundSize: '100% 75%',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    height: '350px',
                    width: '100%',
                    marginBottom: '20px',
                }}
            >
                <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>{product.productName}</h1>
            </div>

            {/* Product Detail Card */}
            <div className="card mb-4">
                <div className="row g-0">
                    {/* Product Image */}
                    <div className="col-md-6">
                        <img
                            src={product.imgUrl}
                            alt={product.productName}
                            className="img-fluid rounded-start"
                            style={{ height: '400px', objectFit: 'contain' }}
                        />
                    </div>
                    {/* Product Details */}
                    <div className="col-md-6">
                        <div className="card-body">
                            <h5 className="card-title">{product.productName}</h5>
                            <div>
                                {[...Array(5)].map((_, index) => (
                                    <i key={index} className="fas fa-star" style={{ color: 'gold' }}></i>
                                ))}
                            </div>
                            <p className="card-text">{product.shortDesc}</p>
                            <p className="card-text">
                                <strong>Category:</strong> {product.category}
                            </p>
                            <p className="card-text">
                                <strong>Price:</strong> ${product.price}
                            </p>
                            <p className="card-text">
                                <strong>Ratings:</strong> {product.reviews[0]?.rating || 'N/A'} ratings
                            </p>
                            {/* Quantity Input and Add to Cart Button */}
                            <div className="d-flex align-items-center">
                                <input
                                    type="number"
                                    className="form-control me-3"
                                    value={qty ? qty : ''}
                                    onChange={handleQty}
                                    min="1"
                                />

                            </div>
                            <button
                                className="btn mt-3" style={{ backgroundColor: 'rgb(0,71,171)', color: 'white' }}
                                onClick={() => addtocart(product.id)}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-4 me-5">
                {/* Tabs */}
                <div className="d-flex justify-content-start mb-3 border-bottom">
                    <span
                        onClick={() => handleClick("description")}
                        className={`me-5 pb-2 ${activeTab === "description" ? "text-dark fw-bold border-bottom border-3" : "text-muted"
                            }`}
                        style={{ cursor: "pointer" }}
                    >
                        Description
                    </span>
                    <span
                        onClick={() => handleClick("reviews")}
                        className={`pb-2 ${activeTab === "reviews" ? "text-dark fw-bold border-bottom border-3" : "text-muted"
                            }`}
                        style={{ cursor: "pointer" }}
                    >
                        Reviews({product.reviews.length})
                    </span>
                </div>
                {/* Content */}
                <div className="">
                    <div className="row">
                        <div className="col-12 col-md-10 col-lg-8">
                            {activeTab === "description" ? (
                                <div className="p-3 bg-light rounded shadow-sm">
                                    <h3 className="mb-3">Product Description</h3>
                                    <p className="text-muted">{product.description}</p>
                                </div>
                            ) : (
                                <div className="p-3 bg-light rounded shadow-sm">
                                    <h3 className="mb-3">Product Reviews</h3>
                                    {product.reviews && product.reviews.length > 0 ? (
                                        product.reviews.map((review) => (
                                            <div key={review.id} className="mb-3 p-3 border rounded">
                                                <div className="fw-bold">John Doe</div>
                                                <div className="text-warning">{review.rating} (ratings)</div>
                                                <div>{review.text}</div>
                                            </div>
                                        ))
                                    ) : (
                                        <p className="text-muted">No reviews available.</p>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {/* Related Products Section */}
            <div>
                <h2 className="mb-4 text-center">You might also like</h2>
                <div className="row g-4 justify-content-center">
                    {products
                        .filter((item) => item.category === product.category && item.id !== product.id)
                        .map((relatedProduct, index) => (
                            <div
                                key={index}
                                className="col-12 col-sm-6 col-md-4 col-lg-3"
                            >
                                <div className="card h-100">
                                    <img
                                        src={relatedProduct.imgUrl}
                                        alt={relatedProduct.productName}
                                        className="card-img-top"
                                        style={{ height: '150px', objectFit: 'contain' }}
                                    />
                                    <div className="card-body text-center">
                                        <h5 className="card-title">{relatedProduct.productName.slice(0, 20)}</h5>
                                        <div>
                                            {[...Array(5)].map((_, index) => (
                                                <i key={index} className="fas fa-star" style={{ color: 'gold' }}></i>
                                            ))}
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center mt-2">
                                            <h4 className="card-text mb-0">${relatedProduct.price}</h4>
                                            <button
                                                id="plus-icon"
                                                className="btn rounded-circle"
                                                onClick={() => addtocart(relatedProduct.id)}
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
