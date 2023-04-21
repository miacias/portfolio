import React, { ReactElement, useEffect, useState } from 'react';
import './Portfolio.module.css';
import Card from '../Card'

/* 
this section WOULD HAVE been important in the process
if I were to hard-code my repositories. Since GitHub API
is rendering all the data in Card(), this section is ultimately unnecessary
*/

export default function() {
    return (
        <>
            <section className='repositories'>
                <Card/>
            </section>
        </>
    )
}