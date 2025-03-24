import React from 'react'
import "./Form.css"
import Input from '../Input/Input'
import Button from '../Button/Button'

const Form = () => {
  const itens = [
    { label: "Nome", placeholder: "Digite seu Nome" },
    { label: "Cargo", placeholder: "Digite seu Cargo" },
    { label: "Imagem", placeholder: "Insira url da imagem" },
  ]

  return (
    <form>
        <p>Preencha os dados para criar o card colaborador</p>
        {itens.map((item, index) => (
          <Input  label={item.label} placeholder={item.placeholder} key={index} />
        ))}
        <Button />
    </form>
  )
}

export default Form