import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setinputValue] = useState('One punch')
    
    const onInputChange = ({target}) => {
        setinputValue(target.value)
    }

    const onSubmit = () => {
        event.preventDefault()
        if(inputValue.trim().length <=  1) return;
        // setCategories(categories => [...categories, inputValue])
        onNewCategory(inputValue.trim())
        setinputValue('')
    }

  return (
    <form onSubmit={ onSubmit }>
        <input
            type="text"
            placeholder="Buscar gifs..."
            value={ inputValue }
            onChange={ onInputChange }
        />
    </form>
   
  )
}
