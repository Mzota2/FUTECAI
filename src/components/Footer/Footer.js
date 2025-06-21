import { Facebook, Instagram, Twitter } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import Button from '../Button/Button'
import Logo from '../Logo/Logo'

function Footer() {
  return (
    <div className='mt-auto'>

      {/* logo div */}
      <div className='w-full bg-primary flex items-center justify-center py-4'>
        <Logo/>
      </div>

      <div className='mt-5 max-w-[1200px] mx-auto w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4'>
          {/* Addresses */}
          <div className='flex flex-col gap-4'>
            <div>
              <p><strong> Address</strong></p>
              <p>Chichiri</p>
              <p>Blantyre, Malawi</p>
            </div>

            <div>
              <p><strong>Hours</strong></p>
              <p>Mon - Fri: 9am - 5pm</p>
              <p>Sat: 10am - 2pm</p>
              <p>Sun: Closed</p>
            </div>

            <div>
              <p><strong>Contact</strong></p>
              <p>support@futecai.com</p>
              <p>+265 981 83 95 78</p>
            </div>

            {/* Social media */}
            <div className='flex gap-2 mt-4'>
              <Link href=''>
                <Facebook/>
              </Link>
              <Link href=''>
                <Instagram/>
              </Link>
              <Link href=''>
                <Twitter/>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className='flex flex-col gap-4'>
            <h3 className='font-bold'>Quick Links</h3>
            <ul className='list-none p-0'>
              <li><Link href='/about'>About Us</Link></li>
              <li><Link href='/services'>Services</Link></li>
              <li><Link href='/contact'>Contact Us</Link></li>
              <li><Link href='/privacy-policy'>Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Help & Support */}
          <div className='flex flex-col gap-4'>
            <h3 className='font-bold'>Help & Support</h3>
            <ul className='list-none p-0'>
              <li><Link href='/faq'>FAQ</Link></li>
              <li><Link href='/contact'>Support Center</Link></li>
              <li><Link href='/terms-of-service'>Terms of Service</Link></li>
            </ul>
          </div>
          
          {/* Newsletter Signup */}
          <div className='flex flex-col gap-4'>
            <h3 className='font-bold'>Newsletter Signup</h3>
            <div className='mt-4 flex flex-col gap-2'>
              <p className='text-light'>Stay updated with our latest news and offers</p>
              <p>Subscribe to our newsletter</p>
              <input type='email' placeholder='Your email address' className='border p-2 rounded-sm w-full' />
              <Button styles={'w-full'} title='Subscribe' />
            </div>
          </div>
      </div>

      {/* Copyright Text */}
      <div className='text-center mt-8 px-4'>
        <p> &copy; {new Date().getFullYear()} FutecAI. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer