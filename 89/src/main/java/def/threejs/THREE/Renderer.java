package def.threejs.THREE;
import def.dom.HTMLCanvasElement;
@jsweet.lang.Interface
public abstract class Renderer extends def.js.Object {
    public HTMLCanvasElement domElement;
    native public void render(Scene scene, Camera camera);
    native public void setSize(double width, double height, Boolean updateStyle);
    native public void setSize(double width, double height);
}

