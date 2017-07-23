package def.threejs.three;
public class CubicInterpolant extends Interpolant {
    public CubicInterpolant(Object parameterPositions, Object samplesValues, double sampleSize, Object resultBuffer){}
    native public Object interpolate_(double i1, double t0, double t, double t1);
    public CubicInterpolant(Object parameterPositions, Object samplesValues, double sampleSize){}
    protected CubicInterpolant(){}
}

