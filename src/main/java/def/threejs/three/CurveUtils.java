package def.threejs.three;
/** Utility class. */
public class CurveUtils extends def.js.Object {
    private CurveUtils(){}
    native public static double tangentQuadraticBezier(double t, double p0, double p1, double p2);
    native public static double tangentCubicBezier(double t, double p0, double p1, double p2, double p3);
    native public static double tangentSpline(double t, double p0, double p1, double p2, double p3);
    native public static double interpolate(double p0, double p1, double p2, double p3, double t);
}

