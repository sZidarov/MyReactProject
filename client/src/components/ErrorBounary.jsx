import { Component } from "react";
export default class ErrorBoundary extends Component {
    constructor() {
        super()

        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError (err) {
        console.log("getDerivedStateFromError");
        return {
            hasError: true,
        }
    }
    componentDidCatch(error, errorInfo) {
        console.log("componentDidCatch");
        console.log(error, errorInfo);
    }

    render (){
        if (this.state.hasError) {
            return <h1>Something went wrong...</h1>
        }
        return (

            this.props.children
        );
    }
}