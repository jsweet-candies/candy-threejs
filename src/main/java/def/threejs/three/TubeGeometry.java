package def.threejs.three;
public class TubeGeometry extends Geometry {
    public TubeGeometry(Path path, double segments, double radius, double radiusSegments, Boolean closed, java.util.function.Function<Double,Double> taper){}
    public Parameters parameters;
    public Vector3[] tangents;
    public Vector3[] normals;
    public Vector3[] binormals;
    native public static double NoTaper(double u);
    native public static double SinusoidalTaper(double u);
    native public static void FrenetFrames(Path path, double segments, Boolean closed);
    /** This is an automatically generated object type (see the source definition). */
    @jsweet.lang.ObjectType
    public static class Parameters extends def.js.Object {
        public Path path;
        public double segments;
        public double radius;
        public double radialSegments;
        public Boolean closed;
        public java.util.function.Function<Double,Double> taper;
    }
    public TubeGeometry(Path path, double segments, double radius, double radiusSegments, Boolean closed){}
    public TubeGeometry(Path path, double segments, double radius, double radiusSegments){}
    public TubeGeometry(Path path, double segments, double radius){}
    public TubeGeometry(Path path, double segments){}
    public TubeGeometry(Path path){}
    native public static double NoTaper();
    protected TubeGeometry(){}
}

