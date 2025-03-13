import IGUIFactory from "../Interfaces/IGUIFactory.js";
import IOSBotao from "./IOSBotao.js";
import IOSCheckbox from "./IOSCheckbox.js";

export default class IOSFactory extends IGUIFactory {
    criarBotao() {
        return new IOSBotao()
    }

    criarCheckbox() {
        return new IOSCheckbox()
    }
}