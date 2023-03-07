const Header = (props) => {

  let message;
  if (props.user) {
    message = `Welcome to the Open Library ${props.user}`;
  } else {
    message = `Welcome to Open Library`;
  }
  
  return (
    <div className={"textHeader"}>
      <h3>{message}</h3>
    </div>
  );
};

export default Header;