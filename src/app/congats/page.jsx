'use client';
import React, { Suspense, useEffect } from 'react';
import doneImage from '/public/done.svg';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import Loading from '../loading';

export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <Congats />
    </Suspense>
  );
}

function Congats() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name');
  const phone = searchParams.get('phone');
  const email = searchParams.get('email'); // fixed typo from "emil"
  const size = searchParams.get('size');

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'form_submission',
        customer_name: name,
        customer_phone: phone,
        customer_organization_size: size,
        customer_email: email,
      });
    }
  }, [name, phone, size, email]);

  return (
    <div className="popup">
      <div className="popup-cont">
        <Image src={doneImage} alt="Wathiq" className="img" />
        <h2>مرحبا {name}</h2>
        <p>تم استلام طلبك بنجاح ، سيتم التواصل معك قريبا</p>
      </div>
    </div>
  );
}
