import React, { useRef, useState } from 'react';
import { legalWords } from '../../helpers/legalWords';
import SignatureCanvas from 'react-signature-canvas';
import { styles } from '../../helpers/styles';

export const Legal = ({ addSignatureToData }) => {
    const [showButtons, setShowButtons] = useState(false);
    const legalSections = [];
    let sigCanvas = useRef();

    for (const section in legalWords) {
        console.log(section);
        legalSections.push(<p key={section}>{legalWords[section]}</p>);
    }

    const clearCanvas = () => {
        sigCanvas.clear();
        setShowButtons(false);
    };

    const today = new Date();

    const handleNextClick = () => {
        const sigData = sigCanvas.toDataURL();
        addSignatureToData(sigData);
    };

    return (
        <>
            <h1 className="text-center mb-5">Legal</h1>
            {legalSections}
            <h2 className="text-center my-3">Please Sign</h2>
            <div className="d-flex align-items-center gap-2">
                <SignatureCanvas
                    backgroundColor="rgba(242,242,242)"
                    onEnd={() => setShowButtons(true)}
                    canvasProps={{
                        width: 600,
                        height: 80,
                    }}
                    ref={(ref) => {
                        sigCanvas = ref;
                    }}
                />
                <p className="fs-4">{today.toLocaleDateString()}</p>
            </div>
            {showButtons && (
                <div className="d-flex gap-3 mt-5 justify-content-center">
                    <button className={styles.button} onClick={handleNextClick}>
                        Next
                    </button>
                    <button className={styles.button} onClick={clearCanvas}>
                        Reset Signature
                    </button>
                </div>
            )}
        </>
    );
};
