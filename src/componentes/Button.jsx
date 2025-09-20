export const Button = ({onClick, children,...props}) => {
    //desestruturação do props 

    return <button onClick={onClick}{...props}>{children}</button>;
};

