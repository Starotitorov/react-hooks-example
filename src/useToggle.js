import { useState } from 'react';

export default function useToggle(expandedByDefault = false) {
    const [expanded, setExpanded] = useState(expandedByDefault);

    function toggle() {
        setExpanded(!expanded);
    }

    function open() {
        setExpanded(true);
    }

    function close() {
        setExpanded(false);
    }

    return {
        expanded,
        toggle,
        open,
        close
    };
}
