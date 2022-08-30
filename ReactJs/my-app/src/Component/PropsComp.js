import React, { Component } from 'react'

export default class PropsComp extends Component {
    super() {
        return (
            <div>
                Hello{this.props.name}
            </div>
        )
    }
}