package def.threejs.three;
import def.js.Float32Array;
public class KeyframeTrack extends def.js.Object {
    public KeyframeTrack(String name, Object[] times, Object[] values, InterpolationModes interpolation){}
    public String name;
    public Object[] times;
    public Object[] values;
    public String ValueTypeName;
    public Float32Array TimeBufferType;
    public Float32Array ValueBufferType;
    public InterpolationModes DefaultInterpolation;
    native public DiscreteInterpolant InterpolantFactoryMethodDiscrete(Object result);
    native public LinearInterpolant InterpolantFactoryMethodLinear(Object result);
    native public CubicInterpolant InterpolantFactoryMethodSmooth(Object result);
    native public void setInterpolation(InterpolationModes interpolation);
    native public InterpolationModes getInterpolation();
    native public double getValuesize();
    native public KeyframeTrack shift(double timeOffset);
    native public KeyframeTrack scale(double timeScale);
    native public KeyframeTrack trim(double startTime, double endTime);
    native public Boolean validate();
    native public KeyframeTrack optimize();
    native public static KeyframeTrack parse(Object json);
    native public static Object toJSON(KeyframeTrack track);
    protected KeyframeTrack(){}
}

