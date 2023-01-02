import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

function Searched() {

        const [searchedCuisine, setSearchedCuisine] = useState([]);
        const params = useParams();

        useEffect(() => {
                getSearchedCuisine(params.search);
        }, [params.search]);

        const getSearchedCuisine = async (cuisine) => {
                const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${cuisine}`);

                const recipes = await data.json();
                setSearchedCuisine(recipes.results);

        }

        return (
                <Grid>
                        {searchedCuisine.map((item) => {
                                return (
                                        <Card key={item.id}>
                                                <Link to={'/Recipe/' + item.id}>
                                                        <img src={item.image} />
                                                        <h4>{item.title}</h4>
                                                </Link>
                                        </Card>
                                )
                        })}
                </Grid>
        )
}

const Grid = styled.div`
 display:grid;
 grid-template-columns:repeat(auto-fit, minmax(20rem, 1fr));
 grid-gap:3rem;
`;

const Card = styled.div`
 img{
        width:100%;
        border-radius:2rem;
 }    
 a{
        text-decoration:none;
 }
 h4{
        text-align:center;
        padding:1rem;
 }
`;

export default Searched