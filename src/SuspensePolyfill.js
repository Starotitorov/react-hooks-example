import { Component } from 'react';

export default class SuspensePolyfill extends Component {
    state = {
        promise: null
    };

    componentDidCatch(e) {
        if (e instanceof Error) {
            throw e;
        }

        if (e instanceof Promise) {
            this.setState({
                promise: e
            }, () => {
                e.then(() => {
                    this.setState({
                        promise: null
                    });
                });
            });
        } else {
            throw e;
        }
    }

    render() {
        if (this.state.promise) {
            return this.props.fallback;
        }

        return this.props.children;
    }
}
