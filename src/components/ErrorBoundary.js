import React from "react";

class ErrorBoundary extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
    hasError: false;
  }
 }
 
 componentDidCatch(error, errorInfo) {
 console.log(error, errorInfo);
  this.setState({hasError: true});
 }

  render() {
    if (this.state.hasError) {
      return (
        <p id="error">
          An error occured. Please try again later.
        </p>
      );
    }
    return <>{this.props.children}</>;
  }
}
export default ErrorBoundary;
