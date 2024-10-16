import React from 'react'
import posts from '../../../data/posts'
import { Post } from '../../../types/post'
import Link from 'next/link'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


interface PostTableProps {
    limit?: number,
    title: String
}

const PostTables = ({ limit, title }: PostTableProps) => {

    const sortedPost = [...posts].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    const filterPost = limit ? sortedPost.slice(0, limit) : sortedPost
    return (
        <div className='mb-3'>

            <h1 className='text-2xl font-bold'>{title ? title : "Posts"}</h1>
            <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead >Title</TableHead>
                        <TableHead className='hidden md:table-cell'>Author</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>
                            View

                        </TableHead>

                    </TableRow>
                </TableHeader>
                <TableBody>

                    {
                        filterPost?.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell >{item.title}</TableCell>
                                <TableCell className='hidden md:table-cell'>{item.author}</TableCell>
                                <TableCell>{item.date}</TableCell>
                                <TableCell>
                                    <Link href={`/posts/edit/${item.id}`}>
                                        <button className='bg-blue-500 px-3 py-2 text-white rounded-sm'>Edit</button>
                                    </Link>
                                </TableCell>
                            </TableRow>

                        ))
                    }

                </TableBody>
            </Table>


        </div>
    )
}

export default PostTables
