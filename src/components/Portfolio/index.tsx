import React, { ReactElement, useEffect, useState } from 'react';
import './Portfolio.module.css';
import Card from '../Card'

export default function Portfolio() {
    return (
        <>
            <section className='portfolio'>
                <h2 id='portfolio'>My Projects</h2>
                <Card/>
            </section>
        </>
    )
}