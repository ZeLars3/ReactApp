import s from './header.module.css';

const Header = (title, descr) => {
    return(
        <div>
            <header className = {s.root}>
                <div className = {s.forest}></div>
                <div className = {s.container}>
                    <h1>This is title</h1>
                    <p>This is Description!</p>
                </div>
            </header>
        </div>
    );
}

export default Header;