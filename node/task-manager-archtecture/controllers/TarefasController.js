import Tarefa from "../model/Tarefa.js"
import fs from "fs"
import path from "path"

const caminho = path.join(import.meta.dirname, "../data/tarefas.json")
class TarefasController {
    static getTarefas(req, res) {
        fs.readFile(caminho, 'utf-8', (err, data) => {
            if (!err && data) {
                return res.status(200).json(JSON.parse(data))
            } else {
                res.status(500).json({ mensagem: err.message })
            }
        })
    }

    static getTarefa(req, res) {
        const { id } = req.params

        fs.readFile(caminho, 'utf-8', (err, data) => {
            let tarefas = []

            if (!err && data) {
                tarefas = JSON.parse(data)
                const tarefa = tarefas.find(tarefa => tarefa.id === id)
                if (!tarefa) {
                    return res.status(404).json({ mensagem: "Tarefa não encontrada." })
                }
                return res.status(200).json(tarefa)
            } else {
                return res.status(500).json({ mensagem: "Problema interno no servidor." })
            }
        })
    }

    static criarTarefa(req, res) {
        const { titulo, responsavel, dataTermino } = req.body
        if (titulo.trim() == "" || responsavel.trim() == "" || dataTermino.trim() == "" ) {
            return res.status(400).json({ mensagem: "Todos os campos devem ser preenchidos." })
        }
        
        fs.readFile(caminho, 'utf-8', (err, data) => {
            let tarefas = []
            
            if (!err && data) {
                try {
                    tarefas = JSON.parse(data)
                } catch(e) {
                    throw Error(e.message)
                }
            }
            const id = Date.now().toString()
            const tarefa = new Tarefa(id, titulo, responsavel, dataTermino)

            tarefas.push(tarefa)
            const jsonDados = JSON.stringify(tarefas, null, 2)

            fs.writeFile(caminho, jsonDados, 'utf-8', (err) => {
                if (err) {
                    return res.status(400).json({ mensagem: "Erro ao criar uma tarefa: " + err.message })
                } else {
                    console.log('Arquivos salvos com sucesso!')
                    return res.status(201).json(tarefa)
                }
            })
        })
    }

    static atualizarTarefa(req, res) {
        const { id } = req.params
        const { concluido } = req.body
        
        fs.readFile(caminho, 'utf-8', (err, data) => {
            let tarefas = []
            if (!err && data) {
                tarefas = JSON.parse(data)
                const index = tarefas.findIndex(tarefa => tarefa.id === id)
                if (index === -1) {
                    return res.status(404).json({ mensagem: "Tarefa não encontrada." })
                }
                tarefas[index].concluido = concluido
                fs.writeFile(caminho, JSON.stringify(tarefas, null, 2), 'utf-8', (err) => {
                    if (err) {
                        res.status(500).json({ mensagem: "Problema ao atualizar tarefa." })
                    }
                })
                return res.status(200).json(tarefas[index])
            } else {
                res.status(500).json({ mensagem: "Problema interno do servidor." })
            }
        })
    }

    static deletarTarefa(req, res) {
        const { id } = req.params

        fs.readFile(caminho, 'utf-8', (err, data) => {
            let tarefas = []
            if (!err && data) {
                tarefas = JSON.parse(data)
                const index = tarefas.findIndex(t => t.id == id)
                if (index === -1) {
                    return res.status(404).json({ mensagem: "Tarefa não encontrada." })
                }
                tarefas = tarefas.filter(tarefa => tarefa.id !== id)
                fs.writeFile(caminho, JSON.stringify(tarefas, null, 2), 'utf-8', err => {
                    if (err) {
                        return res.status(500).json({ mensagem: "Problemas ao deletar tarefa. Tente novamente mais tarde." })
                    }
                })
                res.status(204).send()
            }
        })
    }
}

export default TarefasController