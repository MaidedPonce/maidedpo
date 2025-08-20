'use client'
import React, { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error boundary caught an error:', error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className='min-h-screen bg-brand-purple flex items-center justify-center px-4'>
          <div className='text-center text-white max-w-md'>
            <h1 className='text-4xl font-bold mb-4'>¡Oops!</h1>
            <p className='text-lg mb-6'>
              Algo salió mal. Por favor, recarga la página o intenta más tarde.
            </p>
            <button
              onClick={() => window.location.reload()}
              className='bg-brand-yellow text-brand-purple px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:ring-offset-2 focus:ring-offset-brand-purple'
            >
              Recargar Página
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary