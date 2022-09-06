import React from 'react';
import { legalWords } from '../../helpers/legalWords';

export const Legal = () => {
    const legalSections = [];

    for (const section in legalWords) {
        legalSections.push(<p key="section">{legalSections[section]}</p>);
    }

    return (
        <>
            <h1>Legal</h1>
            {legalSections}
        </>
    );
};
