import { useState } from "react";
import { AddCategory, GifGrid } from "./components/";

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['One punch']);

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories])
    }

    return (
        <>
            <h1>GiftExpertApp</h1>

            {/* Input para buscar gifs */}
            <AddCategory 
                onNewCategory = { value => onAddCategory(value)}
                currentCategories = { categories}
            />

            {/* Contenedor de la categoria buscada */}
            {
                categories.map(category => {
                    return (
                        <GifGrid
                            key={ category }
                            category={ category }
                        />
                    )
                })
            }
        </>
    )
}