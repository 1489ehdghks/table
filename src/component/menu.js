import { NavLink } from "react-bootstrap"

export const Menu =(props)=>{
    return(
        <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <NavLink class="navbar-brand" href="#">Navbar</NavLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <NavLink class="nav-link active" aria-current="page" to="#">Home</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" to="#">Link</NavLink>
        </li>
        <li class="nav-item dropdown">
          <NavLink class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </NavLink>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><NavLink class="dropdown-item" to="#">Action</NavLink></li>
            <li><NavLink class="dropdown-item" to="#">Another action</NavLink></li>
            <li><hr class="dropdown-divider"/></li>
            <li><NavLink class="dropdown-item" to="#">Something else here</NavLink></li>
          </ul>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link disabled">Disabled</NavLink>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    )
}