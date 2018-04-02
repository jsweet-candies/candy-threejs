package def.threejs.THREE;
/** Utility class. */
public class ShapeUtils extends def.js.Object {
    private ShapeUtils(){}
    native public static double area(double[] contour);
    native public static double[] triangulate(double[] contour, Boolean indices);
    native public static double[] triangulateShape(double[] contour, Object[] holes);
    native public static Boolean isClockWise(double[] pts);
}

