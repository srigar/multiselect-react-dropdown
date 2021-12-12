import { withKnobs } from "@storybook/addon-knobs";
import React, { useState } from "react";
import { Story, Meta } from '@storybook/react';

import MultiSelect from "../src";
import { IMultiselectProps } from "../src/multiselect/interface";

const style = {
    chips: {
        background: "red"
    },
    searchBox: {
        border: "none",
        "border-bottom": "1px solid blue",
        "border-radius": "0px"
    },
    multiselectContainer: {
        color: "red"
    }
};

export default {
    title: "Serverside Retrieval",
    component: MultiSelect,
    decorators: [withKnobs]
} as Meta;

const Template: Story<IMultiselectProps> = (args) => <MultiSelect {...args} />;


const range = (size: number): Array<number> =>
    Array.from(new Array(size + 1).keys()).slice(1);

const words = ["Car", "Bike", "E-Bike", "Bus", "Tram", "Truck"]
const randInt = (max: number) => () => Math.floor(Math.random() * max)
const nextIndex = randInt(words.length)
const nextWord = () => words[nextIndex()]
const data = range(100).map(i => `${nextWord()} ${i}`)


export const AsynchronousLoading = () => {
    const [options_, setOptions] = useState<String[]>([]);
    const [loading, setLoading] = useState(false);
    const handleSearch = (value) => {
        setLoading(true);
        const results = value ? data.filter(w => w.toLowerCase().includes(value)) : []
        setTimeout(r => { setOptions(r); setLoading(false) }, 400, results)
    }
    return <MultiSelect
        options={options_}
        onSearch={handleSearch}
        loading={loading}
        isObject={false}
    />
}
