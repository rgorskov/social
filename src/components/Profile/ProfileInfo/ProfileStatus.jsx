import React from 'react';

class Status extends React.Component {
    state = {
        editMode: false,
        inputedStatus: this.props.status,
    };

    enableEditMode() {
        this.setState({ editMode: true });
    }

    disableEditMode() {
        this.setState({ editMode: false });
        this.props.updateStatus(this.state.inputedStatus);
    }

    onInputStatus(e) {
        this.setState({ inputedStatus: e.currentTarget.value });
    }

    componentDidUpdate(prevProps) {
        if (prevProps.status !== this.props.status) {
            this.setState({ inputedStatus: this.props.status });
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode && (
                    <span onClick={this.enableEditMode.bind(this)}>
                        {this.props.status || 'No status'}
                    </span>
                )}
                {this.state.editMode && (
                    <input
                        autoFocus
                        ref={this.statusInputRef}
                        onBlur={this.disableEditMode.bind(this)}
                        value={this.state.inputedStatus}
                        onChange={this.onInputStatus.bind(this)}
                    />
                )}
            </div>
        );
    }
}

export default Status;
