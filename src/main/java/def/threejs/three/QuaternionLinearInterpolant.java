package def.threejs.three;
public class QuaternionLinearInterpolant extends Interpolant {
    public QuaternionLinearInterpolant(Object parameterPositions, Object samplesValues, double sampleSize, Object resultBuffer){}
    native public Object interpolate_(double i1, double t0, double t, double t1);
    public QuaternionLinearInterpolant(Object parameterPositions, Object samplesValues, double sampleSize){}
    protected QuaternionLinearInterpolant(){}
}

