import { Button } from "./Button";

export const Counter = ({onIncremente, OnDecrement}) => {
    return (
        <div>
            <Button onClick={OnDecrement} data-testid="decrement-button">-</Button>
            <Button onClick={onIncremente} data-testid="increment-button">+</Button>
        </div>
    
    );
};