import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import { Link } from "react-router-dom";

const Popular = () => {

        const [popular, setPopular] = useState([]);


        useEffect(() => {
                getPopular();
        }, [])

        const getPopular = async () => {

                const check = localStorage.getItem('popular');

                if (check) {
                        setPopular(JSON.parse(check));
                } else {
                        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);

                        const data = await api.json();

                        localStorage.setItem('popular', JSON.stringify(data.recipes));
                        console.log('fetching popular...');

                }

        }

        return (
                <div>

                        <Wrapper>
                                <h3>Popular Picks</h3>
                                <Splide options={{ perPage: 4, arrows: false, pagination: false, drag: 'free', gap: "5rem" }}>
                                        {
                                                popular.map((recipe) => {
                                                        return (
                                                                <SplideSlide key={recipe.id}>
                                                                        <Card>
                                                                                <Link to={'/Recipe/' + recipe.id}>
                                                                                        <p>{recipe.title}</p>
                                                                                        <img src={recipe.image} alt={recipe.title} />
                                                                                        <Gradient />
                                                                                </Link>
                                                                        </Card>
                                                                </SplideSlide>
                                                        )
                                                })
                                        }

                                </Splide>
                        </Wrapper>

                </div>
        )
}

const Wrapper = styled.div`
        margin:4rem 0;
        h3{
                margin-bottom:2rem;
        }
`;
const Card = styled.div`
        min-height:14rem;
        min-width:20rem;
        border-radius:2rem;
        overflow:hidden;
        position:relative;

        img{
                border-radius:2rem;
                object-fit:cover;
                width:100%;
                height:100%;
                position:absolute;
                left:0;
                
        }
        p{
                position:absolute;
                left:50%;
                bottom:0%;
                text-align:center;
                z-index:3;
                color:white;
                font-weight:600;
                width:100%;
                font-size:1rem;
                height:40%;
                display:flex;
                justify-content:center;
                align-items:center;
                transform:translate(-50%, 0%);

        }
`;

const Gradient = styled.div`
        z-index:2;
        background:linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
        width:100%;
        height:100%;
        position:absolute;
        
`;

export default Popular;