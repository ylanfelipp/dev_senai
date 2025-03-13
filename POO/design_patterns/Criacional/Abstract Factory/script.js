import AndroidFactory from "./Components/AndroidFactory.js";
import IOSFactory from "./Components/IOSFactory.js";

const android_factory = new AndroidFactory()
const ios_factory = new IOSFactory()

android_factory.criarBotao().renderizar()
android_factory.criarCheckbox().renderizar()
ios_factory.criarBotao().renderizar()
ios_factory.criarCheckbox().renderizar()