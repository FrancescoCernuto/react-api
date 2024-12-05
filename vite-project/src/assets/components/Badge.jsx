import { useState } from "react";

export default function Badge({ badge, retrieveTags }) {
    const [tags, setTags] = useState([]);

    function handleChange(e) {
        const value = e.target.id;

        if (!tags.includes(e.target.id)) setTags([...tags, value]);
        return retrieveTags(tags || []);
    }