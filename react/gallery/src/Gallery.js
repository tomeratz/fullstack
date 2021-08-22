import React from 'react'
import { useState, useEffect } from 'react';
import Card from './Card';

const Gallery = props => {
    const url = "https://randomuser.me/api/?results=50";
    const [arr, setArr] = useState([])
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    setLoading(false);
                    setArr(data.results);
                    console.log(arr);
                })
        }, 4000);

    }, [])

    if (isLoading) {
        return (
            <div className="gallery">
                <div className="pre-loader">
                    <div class="box1"></div>
                    <div class="box2"></div>
                    <div class="box3"></div>
                    <div class="box4"></div>
                    <div class="box5"></div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="gallery">
                <div id="divAroundGallery">
                    {
                        arr.map((curr, index) => {
                            return <Card img={curr.picture.large} first={curr.name.first} last={curr.name.last} email={curr.email} />
                        })
                    }
                </div>
            </div>
        )
    }
}



export default Gallery
