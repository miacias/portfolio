import React, { ReactElement, useEffect, useState } from 'react';
import './Portfolio.module.css';
import Card from '../Card'

export default function() {
    return (
        <>
            <section className='repositories'>
                <Card/>
            </section>
        </>
    )
}