import { countries } from "./countries.js";

export function load() {
    return{
        countries: countries.map((country) => ({
                name: country.name,
                content: country.content
        }))
    };
}