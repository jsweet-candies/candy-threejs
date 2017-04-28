package def.threejs.three;
public class TextGeometry extends ExtrudeGeometry {
    public TextGeometry(String text, TextGeometryParameters parameters){}
    public Parameters parameters;
    /** This is an automatically generated object type (see the source definition). */
    @jsweet.lang.ObjectType
    public static class Parameters extends def.js.Object {
        public Font font;
        public double size;
        public double height;
        public double curveSegments;
        public Boolean bevelEnabled;
        public double bevelThickness;
        public double bevelSize;
    }
    public TextGeometry(String text){}
    protected TextGeometry(){}
}

