const { faFacebook, faInstagram, faTwitter } = require('@fortawesome/free-brands-svg-icons');
const { faEnvelope } = require('@fortawesome/free-solid-svg-icons');
const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');

const socialIcons = [
    {
        icon: <FontAwesomeIcon icon={faFacebook} />,
        href: 'https://mauweb.shost.vn/demo/2579',
        tooltip: 'Follow on Facebook',
    },
    {
        icon: <FontAwesomeIcon icon={faInstagram} />,
        href: 'https://mauweb.shost.vn/demo/2579',
        tooltip: 'Follow on Instagram',
    },
    {
        icon: <FontAwesomeIcon icon={faTwitter} />,
        href: 'https://mauweb.shost.vn/demo/2579',
        tooltip: 'Follow on Twitter',
    },
    {
        icon: <FontAwesomeIcon icon={faEnvelope} />,
        href: 'https://mauweb.shost.vn/demo/2579',
        tooltip: 'Send us an Email',
    },
];

export { socialIcons };
