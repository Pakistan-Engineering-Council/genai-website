"use client"


import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import { Button } from "./ui/button"
import { OCCardType } from "./types"
import { useEffect, useState } from "react"

export function CustomCarousel({ data }: { data: OCCardType[] }) {
    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        setHydrated(true)
    }, [])

    if (!hydrated) return null;

    return (
        <div className="px-16 w-full flex items-center justify-center">
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full max-w-5xl"
            >
                <CarouselContent>
                    {data.map((cd, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                                <Card className="rounded-lg shadow-md shadow-gray-400 hover:scale-105 duration-300 ease-in m-3">
                                    <CardHeader className="">
                                        <Image width={1000} height={280} src={cd.imgURL} alt={cd.imgALT} />
                                    </CardHeader>
                                    <CardContent className="flex flex-col gap-5 h-32 justify-center p-6 pt-0 cursor-default">
                                        <CardTitle>
                                            {cd.Heading}
                                        </CardTitle>
                                        <CardDescription>
                                            <p className="text-custom-color"><span className="font-semibold">Duration:</span> {cd.duration} weeks</p>
                                        </CardDescription>
                                    </CardContent>
                                    <CardFooter>
                                        <Button className="w-full mt-3 bg-custom-color">
                                            Apply Now
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}
