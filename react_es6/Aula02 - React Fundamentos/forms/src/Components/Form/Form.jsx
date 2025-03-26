import React, { useState } from 'react'
import Input from '../Input/Input'
import Button from '../Button/Button'
import Dropdown from '../Dropdown/Dropdown'
import "./Form.css"

const Form = () => {
    const [nome, setNome] = useState("")
    const [cargo, setCargo] = useState("")
    const [imagem, setImagem] = useState("")

    const onEnviar = e => {
        e.preventDefault()
        console.log({ nome, cargo, imagem })
    }

    return (
        <form onSubmit={onEnviar}>
            <p>Preencha os dados para criar o card colaborador</p>
            <Input 
                label={"Nome"} 
                placeholder={"Digite seu Nome"} 
                inputValue={nome} 
                setInputValue={setNome} 
            />
            <Input 
                label={"Cargo"} 
                placeholder={"Digite seu Cargo"}
                inputValue={cargo}
                setInputValue={setCargo}
            />
            <Input 
                label={"Imagem"} 
                placeholder={"URL da Imagem"} 
                inputValue={imagem}
                setInputValue={setImagem}
            />
            <Dropdown />
            <Button />
        </form>
    )
}

export default Form