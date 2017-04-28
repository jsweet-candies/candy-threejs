package def.threejs.three;
/** Utility class. */
public class Math extends def.js.Object {
    private Math(){}
    native public static String generateUUID();
    /**
         * Clamps the x to be between a and b.
         *
         * @param value Value to be clamped.
         * @param min Minimum value
         * @param max Maximum value.
         */
    native public static double clamp(double value, double min, double max);
    native public static double euclideanModulo(double n, double m);
    /**
         * Linear mapping of x from range [a1, a2] to range [b1, b2].
         *
         * @param x Value to be mapped.
         * @param a1 Minimum value for range A.
         * @param a2 Maximum value for range A.
         * @param b1 Minimum value for range B.
         * @param b2 Maximum value for range B.
         */
    native public static double mapLinear(double x, double a1, double a2, double b1, double b2);
    native public static double smoothstep(double x, double min, double max);
    native public static double smootherstep(double x, double min, double max);
    /**
         * Random float from 0 to 1 with 16 bits of randomness.
         * Standard Math.random() creates repetitive patterns when applied over larger space.
         */
    native public static double random16();
    /**
         * Random integer from low to high interval.
         */
    native public static double randInt(double low, double high);
    /**
         * Random float from low to high interval.
         */
    native public static double randFloat(double low, double high);
    /**
         * Random float from - range / 2 to range / 2 interval.
         */
    native public static double randFloatSpread(double range);
    native public static double degToRad(double degrees);
    native public static double radToDeg(double radians);
    native public static Boolean isPowerOfTwo(double value);
    native public static double nearestPowerOfTwo(double value);
    native public static double nextPowerOfTwo(double value);
}

