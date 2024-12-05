import { useState } from "react";

export default function Badge({ badge, retrieveTags }) {
    const [tags, setTags] = useState([]);