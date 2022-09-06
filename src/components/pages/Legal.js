import React from 'react';
import { legalWords } from '../../helpers/legalWords';

export const Legal = () => {
    const legalSections = [];

    for (const section in legalWords) {
        console.log(section);
        legalSections.push(<p key="section">{legalWords[section]}</p>);
    }

    return (
        <>
            <h1 className="text-center mb-5">Legal</h1>
            {legalSections}
        </>
    );
};
