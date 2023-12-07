import './navbar.css' 

const Navbar = ({ 'handleClick' }) => {
  return (
    <header>
      <nav>
        <ul>
          <li><a href='/'>Tareas</a></li>
          <li><a href='/'><img src='./logo.png' width="60px" /></a></li>
          <li onClick={handleClick}>Crear</li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar