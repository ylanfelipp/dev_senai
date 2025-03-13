import IGUIFactory from "../Interfaces/IGUIFactory.js";
import AndroidBotao from "./AndroidBotao.js";
import AndroidCheckbox from "./AndroidCheckbox.js";

export default class AndroidFactory extends IGUIFactory {
    criarCheckbox() {
        return new AndroidCheckbox()
    }

    criarBotao() {
        return new AndroidBotao()
    }
}