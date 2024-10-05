'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import SimpleInput from "@/components/input/simple";
import searchIcon from "@/assets/images/search 1.svg"

// css
import "./search.scss"
import {UseDebouncedEffect} from "../../hooks/useDebounce";



type search={
    onChange:(data:string)=>void
    placeholder:string
    delay:number
}

const Search= ({ onChange, placeholder,delay }:search) => {

    const [search, setSearch] = useState("");

    UseDebouncedEffect(onChange, delay, search);


    return (
            <div className="search">
                <SimpleInput
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);
                    }}
                    placeholder={placeholder}
                    type="text"
                />
                <Image className="search__icon" width={20} height={20} src={searchIcon} alt={"search"}/>
            </div>
    );
};

export default Search;