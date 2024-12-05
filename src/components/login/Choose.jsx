'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import user1 from '/public/user1.svg'
import user2 from '/public/user2.svg'
import user3 from '/public/user3.svg'
import user4 from '/public/user4.svg'
import user5 from '/public/user5.svg'
import Link from 'next/link';
export default function Book() {
    let users = [
        { id: 1, image: user1, name: "موظف" , url:"https://wathiq.io/staff/login"},
        { id: 2, image: user2, name: "مشرف" ,url:"https://wathiq.io/supervisor/login"},
        { id: 3, image: user3, name: "ناقل",url:"https://wathiq.io/login" },
        { id: 4, image: user4, name: "عميل" ,url:"https://wathiq.io/station/login"},
        { id: 5, image: user5, name: "مندوب",url:"https://wathiq.io/representative/login"},
    ]

    return (
        <div className="user">
            <h2>اي شخص انت ؟</h2>
            <div className="users">
                {
                    users.map((user) =>
                        <Link href={user.url} className="user-item" key={user.id}>
                            <Image src={user.image} alt="Mazar" width={100} height={100} />
                            <h3>{user.name}</h3>
                        </Link >
                    )
                }
            </div>
        </div>
    );
}
