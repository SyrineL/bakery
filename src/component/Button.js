import React from "react"


class Button extends React.Component {
    render () {
        const { handleClick, children, isSelected,  } = this.props
    return (
        <>
        <button onClick={() => handleClick(children)} className="btn btn-primary" type="submit" >{children}</button>
        </>
    );
}
}
  
  export default Button;
  
  