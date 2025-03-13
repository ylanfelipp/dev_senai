import { SistemaDeNotificacao } from "./SistemaDeNotificacao.js"
import { Observador } from "./Observador.js"

const sistema_notificacao = new SistemaDeNotificacao()
const usuario_1 = new Observador("Ylan")
const usuario_2 = new Observador("Angela")
const usuario_3 = new Observador("Joana")

sistema_notificacao.addObservador(usuario_1)
sistema_notificacao.addObservador(usuario_2)

sistema_notificacao.notificar('Nova Mensagem')
sistema_notificacao.removeObservador(usuario_1)
sistema_notificacao.addObservador(usuario_3)
sistema_notificacao.notificar("Outra Mensagem")