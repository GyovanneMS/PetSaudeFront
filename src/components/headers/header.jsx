import SetaSair from '../../assets/SetaSairEdit.svg'
import { Container, Exit } from '../styles/styles'

export function Header() {
    return (
        <Container>
            <Exit>
                <a href="">
                    <img src={SetaSair} alt="Sair da página"/>
                </a>
            </Exit>
        </Container>
    )
}