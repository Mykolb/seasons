import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'

//React.Components allows us to pull in pull functionality from  React.Component into out class; subclassing, borrowing functionality into our class 
//constructor fn is specific to JS not React, can just call state
//super is reference to parent React.Component
class App extends React.Component {
    state = {
        latitude: null,
        errMsg: ''
    }
    // ALTERNATE WAY
    // constructor(props) {
    //     super(props)  
        // this.state = {
            // latitude: null, //initialize state
            // errMsg: '' 
        
    
    


     componentDidMount() {
         console.log('My comp was rendered to screen')
        //geolocation api 
         window.navigator.geolocation.getCurrentPosition(
        // create fn's so that it returns postion
        //latittude tells which hemisphere user is in
        position => this.setState({ latitude: position.coords.latitude}),
            //only way to update state is using setState
         
        // position => console.log(position), 
        err => this.setState({ errMsg: err.message })
            //only adding or changing properties on state, not deleting or removing
                 //  console.log(err)
       
             );
            }
        

 
// //render is called before CDU
//      componentDidUpdate() {
//          console.log('My compon updated-re rendered')
//      }

    render() {
            if ( this.state.errMsg && !this.state.latitude) {
                return <div>Error: {this.state.errMsg}</div>
            }
            if (!this.state.errMsg && this.state.latitude ) {
                return <SeasonDisplay latitude={this.state.latitude} />
                //taking state and passing it down as prop
            }
            // if (!this.state.errMsg && !this.state.latitude) { <---- means this 
                return <div>Loading...</div>
            }
        }
    

  
    // )




    // return(
    //     <div>Latitude: </div>
    // )


ReactDOM.render(<App />, document.querySelector('#root')
);