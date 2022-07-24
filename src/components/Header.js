const Header = ({theme, toggleThemeMode}) => {
    return (
        <header>
            <h1>Notes</h1>
            <button 
                className="btn btn__theme" 
                onClick={() => toggleThemeMode(prevTheme => !prevTheme)}
            >{theme ? 'Dark' : 'Light'} Mode</button>
        </header>
    );
}

export default Header;