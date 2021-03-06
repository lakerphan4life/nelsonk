import React from 'react'

const Contact = (props) => (
    <section id="contact">
        <div className="inner">
            <section>
                <form method="POST" action="/message-sent" name='contact' data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />

                    <div className="field half first">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" required />
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" required />
                    </div>
                    <div className="field">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" rows="6"></textarea>
                    </div>
                    <ul className="actions">
                        <li><button type="submit" className="button dark-btn"><span style={{ fontFamily: `"Montserrat", Helvetica, sans-serif` }}>Submit Message</span></button></li>
                    </ul>
                </form>
            </section>
            <section className="split">
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-envelope"></span>
                        <h3>Email</h3>
                        {/* <p><span>Sales: </span><br /><a href="mailto:Sales@nelsonkenterprise.com">Sales@nelsonkenterprise.com</a></p> */}
                        <p><a href="mailto:Support@nelsonkenterprise.com">Support@nelsonkenterprise.com</a></p>
                        {/* <span>Client Relations: </span><br /><a href="mailto:client-relations@nelsonkenterprise.com">client-relations@nelsonkenterprise.com</a><br /> */}
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-phone"></span>
                        <h3>Phone</h3>
                        <p><span>Main: </span><a href="tel:18002037719">800.203.7719</a><br />
                        <span>Cell: </span><a href="tel:14254225348">425.422.5348</a></p>
                    </div>
                </section>
                {/* <section>
                    <div className="contact-method">
                        <span className="icon alt fa-home"></span>
                        <h3>Address</h3>
                        <span>1234 Somewhere Road #5432<br />
                        Nashville, TN 00000<br />
                        United States of America</span>
                    </div>
                </section> */}
            </section>
        </div>
    </section>
)

export default Contact
