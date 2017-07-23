package def.threejs.three;
public class LinearInterpolant extends Interpolant {
    public LinearInterpolant(Object parameterPositions, Object samplesValues, double sampleSize, Object resultBuffer){}
    native public Object interpolate_(double i1, double t0, double t, double t1);
    public LinearInterpolant(Object parameterPositions, Object samplesValues, double sampleSize){}
    protected LinearInterpolant(){}
}

