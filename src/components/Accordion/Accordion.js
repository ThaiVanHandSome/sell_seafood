import PropTypes from 'prop-types';
import { useState } from 'react';
import { Accordion, AccordionItem, AccordionHeader, AccordionBody } from 'reactstrap';

function AccordionWrapper({ header, body }) {
    const [openAccordion, setOpenAccordion] = useState('1');

    const toggleAccordion = (id) => {
        if (openAccordion === id) {
            setOpenAccordion('');
        } else {
            setOpenAccordion(id);
        }
    };

    return (
        <Accordion open={openAccordion} toggle={toggleAccordion}>
            <AccordionItem>
                <AccordionHeader targetId="1">{header}</AccordionHeader>
                <AccordionBody accordionId="1">{body}</AccordionBody>
            </AccordionItem>
        </Accordion>
    );
}

AccordionWrapper.propTypes = {
    header: PropTypes.node,
    body: PropTypes.node,
};

export default AccordionWrapper;
