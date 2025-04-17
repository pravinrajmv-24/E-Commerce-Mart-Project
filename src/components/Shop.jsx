import React, { useContext, useEffect, useState } from 'react'

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

import { Link } from 'react-router-dom';
import { AppContext } from '../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';



export default function Shop() {
    const { products, setProducts } = useContext(AppContext);
    const [search, setSearch] = useState('')
    const [change, setChange] = useState('sofa')
    const handleSearch = (e) => {
        setSearch(e.target.value.toLowerCase())
    }
    const handleChange = (e) => {
        setChange(e.target.value)
    }
    const filteredProducts = products
        .filter((product) => product.productName.toLowerCase().includes(search) && product.category === change)
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
        <div className="container-fluid p-0" style={{ marginTop: '100px' }}>
            <div
                id="ctn"
                className="d-flex justify-content-center align-items-center text-black"
                style={{
                    backgroundImage: `url(${table})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    height: '250px',
                    width: '100vw',
                    marginTop: '100px',
                    marginBottom: '100px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <h1 style={{ color: 'white' }}>Product</h1>
            </div>

            <div className="row mb-4">
                <div
                    className="col-12 col-md-6 mb-3"
                    style={{ width: 'fit-content', marginLeft: '110px' }}
                >
                    <div style={{ position: 'relative', width: '200px' }}>
                        <select
                            onClick={handleChange}
                            className="form-select"

                            id="product-filter"
                            style={{
                                backgroundColor: 'rgb(0, 0, 139)',
                                color: 'white',
                                paddingRight: '40px',
                                border: '1px solid #ccc',
                                fontSize: '16px',
                                appearance: 'none',
                                WebkitAppearance: 'none',
                                MozAppearance: 'none',
                                outline: 'none',
                            }}
                        >
                            <option value="sofa">Filter by Category |</option>
                            <option value="sofa">Sofa</option>
                            <option value="mobile">Mobile</option>
                            <option value="watch">Watch</option>
                            <option value="wireless">Wireless</option>
                            <option value="chair">Chair</option>
                        </select>
                        <i
                            className="fa fa-chevron-down"
                            style={{
                                position: 'absolute',
                                top: '50%',
                                right: '10px',
                                transform: 'translateY(-50%)',
                                pointerEvents: 'none',
                                color: 'white',
                            }}
                        ></i>
                    </div>



                </div>
                <div className="col-12 col-md-6 mb-3">
                    <div className="input-group" style={{ position: 'relative' }}>
                        <input
                            type="search"
                            onChange={handleSearch}
                            className="form-control"
                            placeholder="Search products"
                            style={{
                                borderRadius: '50px',
                                paddingLeft: '30px',
                                paddingRight: '40px',
                                border: '1px solid #ccc',
                                outline: 'none',
                            }}
                            onFocus={(e) => {
                                e.target.style.boxShadow = 'none';
                            }}

                        />
                        <span
                            className="input-group-text"
                            style={{
                                position: 'absolute',
                                right: '10px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                background: 'none',
                                borderRadius: '25px',
                                border: 'none',
                                pointerEvents: 'none',
                            }}
                        >
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </span>
                    </div>


                </div>
            </div>

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-4">
                {filteredProducts.map((product, index) => (
                    <Link
                        to="/shop/detail"
                        className="text-decoration-none"
                        state={{ product }}
                        key={index}
                    >
                        <div className="col d-flex justify-content-center">
                            <div className="card" style={{ width: '18rem' }}>
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
                                            <i
                                                key={index}
                                                className="fas fa-star"
                                                style={{ color: 'gold' }}
                                            ></i>
                                        ))}
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center mt-2">
                                        <h4 className="card-text mb-0">${product.price}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}