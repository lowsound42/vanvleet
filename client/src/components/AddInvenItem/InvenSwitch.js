import React from "react";
import Switch from "react-switch";
class InvenSwitch extends React.Component {
    state = { checked : false }

    handleChange = () => {
        this.setState({ checked: true });
    }

    render () {
        return (
            <Switch checkedIcon={false} uncheckedIcon={false} onChange={this.handleChange} checked={this.state.checked}/>
        )
    }
} 

export default InvenSwitch;