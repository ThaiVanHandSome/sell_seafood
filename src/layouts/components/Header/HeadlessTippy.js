import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';

function HeadlessTippy({ render, children }) {
    return (
        <div>
            <Tippy interactive placement="bottom-start" offset={[-20, 6]} delay={[100, 0]} zIndex={100} render={render}>
                <li>{children}</li>
            </Tippy>
        </div>
    );
}

HeadlessTippy.propTypes = {
    children: PropTypes.node,
};

export default HeadlessTippy;
