import React from 'react';

class Status extends React.Component {
    state = {
        editMode: false,
    };

    enableEditMode() {
        this.setState({ editMode: true });
    }

    disableEditMode() {
        this.setState({ editMode: false });
    }

    render() {
        return (
            <div>
                {!this.state.editMode && (
                    <span onClick={this.enableEditMode.bind(this)}>
                        {this.props.text}
                    </span>
                )}
                {this.state.editMode && (
                    <input
                        autoFocus
                        onBlur={this.disableEditMode.bind(this)}
                        value={this.props.text}
                    />
                )}
            </div>
        );
    }
}

export default Status;
