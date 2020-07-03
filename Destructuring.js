import React, {Component} from 'react'

class Classdestructuring extends Component{
    render(){ 
        const {name, school}= this.props

        return <h1>Hi, I am {name} . My school name {school} .</h1>
    }
}

export default Classdestructuring;