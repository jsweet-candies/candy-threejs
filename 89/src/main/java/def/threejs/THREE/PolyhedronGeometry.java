package def.threejs.THREE;
public class PolyhedronGeometry extends Geometry {
    public PolyhedronGeometry(double[] vertices, double[] indices, double radius, double detail){}
    public Parameters parameters;
    public Sphere boundingSphere;
    /** This is an automatically generated object type (see the source definition). */
    @jsweet.lang.ObjectType
    public static class Parameters extends def.js.Object {
        public double[] vertices;
        public double[] indices;
        public double radius;
        public double detail;
    }
    public PolyhedronGeometry(double[] vertices, double[] indices, double radius){}
    public PolyhedronGeometry(double[] vertices, double[] indices){}
    protected PolyhedronGeometry(){}
}

