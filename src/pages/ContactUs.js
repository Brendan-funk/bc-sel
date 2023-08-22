import React from "react";
import { useParams } from "react-router-dom";
export default function ContactUs() {
    let { id } = useParams();
    return (
        <>
        <h1>Contact Us page</h1>
        <p>Content coming soon</p>
        </>
    ) 
}