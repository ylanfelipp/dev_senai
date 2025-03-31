import React, { useState } from 'react'
import Input from '../Input/Input'
import Button from '../Button/Button'
import Dropdown from '../Dropdown/Dropdown'
import "./Form.css"

const Form = ({ setColaboradores }) => {
    const [nome, setNome] = useState("")
    const [time, setTime] = useState("")
    const [cargo, setCargo] = useState("")
    const [imagem, setImagem] = useState("")

    const onEnviar = e => {
        e.preventDefault()
        setColaboradores(colaboradores => [...colaboradores, { nome, cargo, imagem, time }])
        setNome("")
        setTime("")
        setCargo("")
        setImagem("")
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
            <Dropdown selectValue={time} setSelectValue={setTime} />
            <Button />
        </form>
    )
}

export default Form