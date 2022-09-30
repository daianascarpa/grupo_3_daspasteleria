import logo from '../assets/img/DAS_logo.png'
function Header () {

    return(
        <header>
        <div class="h-top-header-mobile">
          <div class="h-menu" action="#" method="GET">
             
          </div>
          <div class="h-logo-space">
            <img src={logo} alt="Logo DAS"/>
          </div>
          <div class="h-box">
            
           
            <div class="h-dropdown">
              
              <div class="h-dropdown-content">
                <a href="/Usuarios/profile">Mi perfil</a>
                <hr />
                <a href="/Usuarios/logout">Cerrar Sesión</a>
              </div>
            </div>
      
                 
           
          </div>
        </div>
        <div class="h-nav-menu">
          <nav class="h-lista-menu">
            <a href="/home">INICIO</a>
            <a href="/Productos">PRODUCTOS</a>
            <a href="/Productos/carrito-de-compras">CARRITO</a>
          </nav>
        </div>
      </header>

     )


}

export default Header;