import React, { useState, useEffect } from 'react';
import MediaCard from '../MediaCardComponent/MediaCard';
import { Grid } from '@material-ui/core';
import './MediaGrid.css';

interface IState {
    gender: any | null;
    name: any | null;
    location: any | null;
    email: any | null;
    login: any | null;
    picture: any | null;

}
interface IMediaGridProps {
    DisplayNumber: (any | null);
}
function MediaGrid(props: IMediaGridProps) {
    const [ItemArray, setItemArray] = useState<IState[]>([{ 
        gender: null,
        name: null,
        location: null,
        email: null,
        login: null,
        picture: null,
     }]);

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=' + props.DisplayNumber)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setItemArray(response.results)
            })
            .catch(() => console.log("it didn't work")
    
            );

    }, [props.DisplayNumber]);

    var Cards: JSX.Element[] = [];
    ItemArray.forEach((el: IState, i: Number) => {
        if (!el || !el.picture || !el.name) {
            return;
        }
        Cards.push(
            <Grid key={"card_"+i} item sm={6} md={4} lg={3} className="MediaGridCard">
                <MediaCard ImageUrl={el['picture']['medium']} Name={el["name"]['first']} />
            </Grid>)
    })

    return (
        <div>
            <Grid container spacing={3} className="MediaGridContainer">
                {Cards}
            </Grid>
        </div>
    )
}

export default MediaGrid