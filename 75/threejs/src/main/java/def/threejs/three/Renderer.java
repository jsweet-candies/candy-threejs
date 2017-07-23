package def.threejs.three;
import def.dom.HTMLCanvasElement;
@jsweet.lang.Interface
public abstract class Renderer extends def.js.Object {
    native public void render(Scene scene, Camera camera);
    native public void setSize(double width, double height, Boolean updateStyle);
    public HTMLCanvasElement domElement;
    native public void setSize(double width, double height);
}

