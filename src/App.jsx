import styled from 'styled-components'
import { GlobalStyle } from './styles/global'
import { Header } from './components/headers/header'

export function App(){
    return (
      <>
        <Header />
        <GlobalStyle />
      </>
    )
}