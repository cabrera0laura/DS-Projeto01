export const Button = ({onClick, children}) => {
    //desestruturação do props 

    return <button onClick={onClick}>{children}</button>;
};

