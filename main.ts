import { Main } from "@k8slens/extensions";

export default class VulOperatorExtensionMain extends Main.LensExtension {
  onActivate() {
    console.log('vul-operator extension activated');
  }

  onDeactivate() {
    console.log('vul-operator extension de-activated');
  }
}