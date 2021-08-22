import React from 'react'
import PropTypes from 'prop-types'

function Card(props) {
    return (
        <div className={"card"}>
            <img src={props.img} alt="member portrait" />
            <div id="memberNameDiv"> {props.first} {props.last} </div>
            <div id="emailDiv"> {props.email} </div>
        </div>
    )
}

Card.propTypes = {

}

export default Card

