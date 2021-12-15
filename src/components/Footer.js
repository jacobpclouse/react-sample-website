import React from 'react'
import { Button } from './Button.js'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the Adventure Newsletter
                </p>
                <p className="footer-subscription-text">
                    Unsubscribe at any time
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Your Email" className="footer-input" />
                    </form>
                    <Button buttonStyle="btn--outline">Subscribe</Button>
                </div>
            </section>
            <div class='footer-links'>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Destinations</Link>
                        <Link to='/'>Sponsorships</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>Videos</h2>
                        <Link to='/'>Submit Video</Link>
                        <Link to='/'>Ambassadors</Link>
                        <Link to='/'>Agency</Link>
                        <Link to='/'>Influencer</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Youtube</Link>
                        <Link to='/'>Twitter</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to='/' className="social-logo">
                            JPC <i className="fab fa-typo3" />
                        </Link>
                    </div>
                    <small className="website-rights">Created by Jacob Clouse</small>
                    <div className="social-icons">
                        <Link className="social-icon-link linkedin"
                            to='/'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <i className="fab fa-linkedin"></i>
                        </Link>

                        <Link className="social-icon-link github"
                            to='/'
                            target='_blank'
                            aria-label='Github'
                        >
                            <i className="fab fa-github"></i>
                        </Link>

                        <Link className="social-icon-link facebook"
                            to='/'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <i className="fab fa-facebook-f"></i>
                        </Link>

                        <Link
                            class='social-icon-link instagram'
                            to='/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <i class='fab fa-instagram' />
                        </Link>

                        <Link
                            class='social-icon-link youtube'
                            to='/'
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <i class='fab fa-youtube' />
                        </Link>
                        
                        <Link
                            class='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <i class='fab fa-twitter' />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
