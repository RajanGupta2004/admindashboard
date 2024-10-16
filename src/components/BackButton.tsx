import Link from 'next/link'
import React from 'react'
import { CircleArrowLeft } from 'lucide-react';

interface ButtonProps {
    text: string;
    link: string;

}

const BackButton = ({ text, link }: ButtonProps) => {
    return (
        <div>
            <Link href={link} className='flex items-center gap-1 text-gray-500 font-bold hover:underline  my-2'>
                <CircleArrowLeft />
                {text}

            </Link>

        </div>
    )
}

export default BackButton
