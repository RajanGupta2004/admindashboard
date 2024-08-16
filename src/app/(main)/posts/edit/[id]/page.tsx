"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import BackButton from '@/components/BackButton'
import React from 'react'
import posts from "../../../../../../data/posts"
import { useToast } from "@/components/ui/use-toast"



const formSchema = z.object({
    title: z.string().min(2).max(50),
    body: z.string().min(1),
    author: z.string().max(50),
    date: z.string().date()
})

// interface EditProps {
//     id: {
//         id: string

//     }
// }

const EditPage = ({ params }: any) => {
    // console.log(params)

    const post = posts.find((Item) => Item.id == params.id)
    const { toast } = useToast()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: post?.title || "",
            body: post?.body || "",
            author: post?.author || "",
            date: post?.date || ""


        },
    })


    const onSubmit = (data: z.infer<typeof formSchema>) => {

        toast({
            title: "Post is updated successfully..",
            description: `post is updated at ${data.date} by ${data.author}`
        })

    }
    return (
        <div>
            <BackButton text="Back to Posts" link="/posts" />
            <h1 className="text-xl font-bold text-gray-500 my-4">Edit page</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-semibold text-gray-600">Title</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your Title" {...field} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="body"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-semibold text-gray-600">Body</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your Body" {...field} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="author"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-semibold text-gray-600">Author</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your Author Name" {...field} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="date"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-semibold text-gray-600">Date</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter Date" {...field} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="w-full">Submit</Button>
                </form>
            </Form>

        </div>
    )
}

export default EditPage
