import { Button } from "./Button";

export const Counter = ({onIncremente, OnDecrement}) => {
    return (
        <div>
            <Button onClick={OnDecrement}>-</Button>
            <Button onClick={onIncremente}>+</Button>
        </div>
    );
};