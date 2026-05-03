import '@testing-library/jest-dom'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { TextEncoder, TextDecoder } from 'util'

global.render = render
global.screen = screen
global.fireEvent = fireEvent
global.waitFor = waitFor

global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder
