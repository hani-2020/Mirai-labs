import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
        <div className='contact-heading'>Contact Us</div>
        <div className='contact-details'>
            <div className='contact-details-name'>
            <form>
                <label>Enter your name:
                <input type="text" />
                </label>
            </form>
            </div>
            <div className='contact-details-email'>
            <form>
                <label>Enter your Email:
                <input type="text" />
                </label>
            </form>
            </div>
        </div>
        <div className='contact-message'>
            <form>
                <label>Type your message:
                    <br/>
                <textarea rows={10} cols={50}></textarea>
                </label>
            </form>
        </div>
    </div>
  )
}

export default Contact