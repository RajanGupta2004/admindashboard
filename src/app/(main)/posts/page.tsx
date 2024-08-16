import BackButton from '@/components/BackButton'
import PostPagination from '@/components/posts/PostPagination'
import PostTables from '@/components/posts/PostTables'
import React from 'react'

const PostsPage = () => {
    return (
        <>
            <BackButton link={"/"} text={"Back"} />

            <PostTables title={"Posts"} />
            <PostPagination />


        </>
    )
}

export default PostsPage
