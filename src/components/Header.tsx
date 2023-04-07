import StyleSheet from './Header.module.css'

//import igniteLogo from '../assets/ignite-logo.svg'
import reactLogo from '../assets/ignite-logo.svg'

export function Header() {
    return (
        <header className={StyleSheet.header}>
            <img src={reactLogo} alt="Logotipo"/>
            <strong>
                <h1>Ignite Feed</h1>
            </strong>
        </header>
    );
}