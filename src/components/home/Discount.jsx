import React from 'react';
import Image from 'next/image';
import bg from '/public/saudi.jpg'
import Link from 'next/link';
export default function Discount() { // Defining the main functional component named 'Footer'.

    return (
        <div className="discount" style={{ backgroundImage: `url(${bg.src})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className="overlay">
                <div className="container m-auto">
                    <div className="relat">
                        <span className='abs-span'>خصم </span>
                        <h2>اشترك، واحصل على خصم 20% عرض نهاية السنة.</h2>
                        <div className="links">
                            <Link href="/book" className='yellow-btn order'>طلب النظام </Link>
                            <Link href="https://wa.me/+966551314455?text=Good%20Morning%20Wathiq" className='yellow-btn tagr'>اطلب نسختك التجريبيه</Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
