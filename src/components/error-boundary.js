import React from "react"

export default function ErrorBoundary(Component) {
  return class ErrorBoundary extends React.Component {
    state = { error: null }

    static getDerivedStateFromError(error) {
      return { error }
    }

    clearError = () => this.setState({ error: null })

    render() {
      return (
        <Component
          {...this.props}
          {...this.state}
          clearError={this.clearError}
        />
      )
    }
  }
}
