package def.threejs.THREE;
import def.dom.HTMLElement;
public class CSS3DRenderer extends def.js.Object {
    public CSS3DRenderer(){}
    public HTMLElement domElement;
    native public void setSize(double width, double height);
    native public void render(Scene scene, Camera camera);
}

