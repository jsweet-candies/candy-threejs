package def.threejs.THREE;
public class Font extends def.js.Object {
    public Font(String jsondata){}
    public String data;
    native public Object[] generateShapes(String text, double size, double divisions);
    protected Font(){}
}

