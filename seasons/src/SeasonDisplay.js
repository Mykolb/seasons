import React from 'react'
import 'semantic-ui-css/semantic.min.css';

const seasonConfig = {
    summer: {
        text: 'Lets hit the beach',
        iconName: 'sun'
    },
    winter: {
        text: 'Burrr, it is chilly',
        iconName: 'snowflake'
    }
}


const getSeason = (latitude, month) => {
if(month > 2 && month < 9) {
   return latitude > 0 ? 'summer' : 'winter'
} else {
    return latitude < 0 ? 'winter' : 'summer'
}
}


const SeasonDisplay = props => {
    console.log(props.latitude)
    const season = getSeason(props.latitude, new Date().getMonth())
    // const icon = season === 'winter' ? 'snowflake' : 'sun'
    // console.log(season)
    const {text, iconName} = seasonConfig[season] //text, iconName

    return( 
    <div>
    <i className={`${iconName} icon`} />
    {/* {season === 'winter' ? <h1>'Burrr, it is chilly'</h1> : <h1>'Lets hit the beach'</h1>} */}
    <h1>{text}</h1>
    <i className={`${iconName} icon`} />
    </div>
    )
}


export default SeasonDisplay;