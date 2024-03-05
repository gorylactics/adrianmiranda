const Menu = ({ menuOptions }) => {
    return (
      <nav>
        <ul>
          {menuOptions.map(option => (
            <li key={option.id}>
              <a href={option.link}>{option.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
  
export default Menu;