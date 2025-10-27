import './Contact.css';
import PillNav from '../../components/pillNav/PillNav';
import img from '../../assets/logo-svg-ev.svg';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [sending, setSending] = useState(false);
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSending(true);
        setStatus('');

        try {
            // Configuración de EmailJS
            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message,
                to_email: 'emanuel.viader@gmail.com'
            };

            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                templateParams,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Error al enviar el correo:', error);
            setStatus('error');
        } finally {
            setSending(false);
            setTimeout(() => setStatus(''), 5000);
        }
    };

    return (
        <>
            <nav className='navbar'>
                <PillNav
                    logo={img}
                    logoAlt="Company Logo"
                    items={[
                        { label: 'Inicio', href: '/' },
                        { label: 'Sobre mí', href: '/about' },
                        { label: 'Proyectos', href: '/projects' },
                        { label: 'Contacto', href: '/contact' }
                    ]}
                    activeHref="/"
                    className="custom-nav"
                    ease="power2.easeOut"
                    baseColor="transparent"
                    pillColor="transparent"
                    hoveredPillTextColor="#DF3F1F"
                    pillTextColor="#000000"
                />
            </nav>
            <section id="contact" className="contact-section">
                <div className="contact-container">
                    <h2 className="section-title">HABLEMOS</h2>
                    <p className="contact-intro-message">
                        ¡Me encantaría conocer tu proyecto! Si tienes una idea, una oportunidad de colaboración o simplemente quieres saludar, no dudes en contactarme. Siempre estoy abierto a nuevas y emocionantes propuestas.
                    </p>

                    {/* Formulario de Contacto */}
                    <div className="form-wrapper">
                        <h3>Envíame un mensaje</h3>
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Nombre"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <textarea
                                name="message"
                                placeholder="Mensaje"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                            <button
                                type="submit"
                                className="button primary-button"
                                disabled={sending}
                            >
                                {sending ? 'Enviando...' : 'Enviar Mensaje'}
                            </button>
                            {status === 'success' && (
                                <p className="status-message success">¡Mensaje enviado con éxito!</p>
                            )}
                            {status === 'error' && (
                                <p className="status-message error">Error al enviar el mensaje. Por favor, intenta de nuevo.</p>
                            )}
                        </form>
                    </div>

                    {/* Otras Formas de Contacto */}
                    <div className="other-contact-options">
                        <h3>Otras formas de contacto</h3>
                        <div className="contact-item">
                            <i className="fas fa-envelope"></i>
                            <span>emanuel.viader@gmail.com</span>
                        </div>
                        <div className="contact-item">
                            <i className="fas fa-phone"></i>
                            <span>+54 (341) 6800654</span> {/* Puedes eliminarlo si no quieres tu teléfono */}
                        </div>
                        <div className="contact-item">
                            <i className="fab fa-linkedin"></i>
                            <a href="https://linkedin.com/in/tuperfil" target="_blank" rel="noopener noreferrer">
                                LinkedIn
                            </a>
                        </div>
                        <div className="contact-item">
                            <i className="fab fa-github"></i>
                            <a href="https://github.com/tuperfil" target="_blank" rel="noopener noreferrer">
                                GitHub
                            </a>
                        </div>
                        <div className="contact-item">
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Rosario, Santa Fe, Argentina (Remoto)</span>
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
}

export default Contact;