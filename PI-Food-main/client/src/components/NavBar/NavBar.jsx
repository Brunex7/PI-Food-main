import style from './NavBar.module.css';


const NavBar = () =>{
    return(
        <nav className={style.mainContainer}>
            <h1>HENRRY | PI FOOD</h1>
            <div className={style.links}>
                <a href='/home'>HOME</a>
                <a href='/create'>FORM</a>
            </div>
        </nav>
    )
}

export default NavBar;