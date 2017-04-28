package def.threejs.three;
/** Utility class. */
public class ShapeUtils extends def.js.Object {
    private ShapeUtils(){}
    native public static double area(double[] contour);
    native public static jsweet.util.union.Union<Vector2[][],Double[][]> triangulate(Vector2[] contour, Boolean indices);
    native public static Vector2[][] triangulateShape(Vector2[] contour, Vector2[][] holes);
    native public static Boolean isClockWise(double[] pts);
    native public static double b2(double t, double p0, double p1, double p2);
    native public static double b3(double t, double p0, double p1, double p2, double p3);
}

