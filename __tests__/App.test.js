import React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import App from '../src/App'

describe('App', () => {
  it('should render Hello world', () => {
    const testMessage = 'Hello world'
    render(<App />)

    expect(screen.getByText(testMessage)).toBeInTheDocument()
  })

  it('should be visible', () => {
    const testMessage = 'Hello world hidden'
    render(<App />)

    expect(screen.getByText(testMessage)).not.toBeVisible()
  })
})
