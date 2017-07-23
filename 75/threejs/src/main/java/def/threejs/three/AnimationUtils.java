package def.threejs.three;
/** Utility class. */
public class AnimationUtils extends def.js.Object {
    private AnimationUtils(){}
    native public static Object arraySlice(Object array, double from, double to);
    native public static Object convertArray(Object array, Object type, Boolean forceClone);
    native public static Boolean isTypedArray(Object object);
    native public static double[] getKeyFrameOrder(double times);
    native public static Object[] sortedArray(Object[] values, double stride, double[] order);
    native public static void flattenJSON(String[] jsonKeys, Object[] times, Object[] values, String valuePropertyName);
}

