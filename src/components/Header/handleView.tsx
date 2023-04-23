import React, { useState } from 'react';

export default function View() {
    // sets initial state to show about component
    const [view, setView] = useState('about');

    const handleView = (value: string) => {
        setView(value);
    }
}