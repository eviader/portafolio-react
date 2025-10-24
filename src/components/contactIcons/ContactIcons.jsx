import './ContactIcons.css'
import { IconBrandInstagram, IconBrandGithub, IconMailCode } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';

function ContactIcons({ text, link }) {
    const navigate = useNavigate();

    const socialLinks = [
        {
            name: 'Email',
            icon: <IconMailCode size={28} color='#DF3F1F'/>,
            url: '/contact',
            isInternal: true
        },
        {
            name: 'GitHub',
            icon: <IconBrandGithub size={28} color='#DF3F1F' />,
            url: 'https://github.com/eviader',
            isInternal: false
        },
        {
            name: 'Instagram',
            icon: <IconBrandInstagram size={28} color='#DF3F1F'/>,
            url: 'https://instagram.com/viaderemanuel',
            isInternal: false
        }
    ];

    const handleClick = (social, e) => {
        if (social.isInternal) {
            e.preventDefault();
            navigate(social.url);
        }
    };

    return (
        <>
            {socialLinks.map((social, index) => (
                <a
                    key={index}
                    href={social.url}
                    target={social.isInternal ? '_self' : '_blank'}
                    rel={social.isInternal ? '' : 'noopener noreferrer'}
                    className="contact-icon-link"
                    aria-label={social.name}
                    onClick={(e) => handleClick(social, e)}
                >
                    {social.icon}
                </a>
            ))}
        </>
    );

}

export default ContactIcons;