import React from 'react';
import { Button } from 'reactstrap';
import useToggle from '../useToggle';
import './CollapsibleText.css';

export default function CollapsibleText({ children }) {
    const { expanded, toggle } = useToggle();
    const triggerText = expanded ? 'Show less' : 'Show more';

    return (
        <div>
            <Button color="link" className="trigger" onClick={toggle}>
                {triggerText}
            </Button>
            <p>{expanded ? children : null}</p>
        </div>
    );
};
