package def.threejs.three;
public class DiscreteInterpolant extends Interpolant {
    public DiscreteInterpolant(Object parameterPositions, Object samplesValues, double sampleSize, Object resultBuffer){}
    native public Object interpolate_(double i1, double t0, double t, double t1);
    public DiscreteInterpolant(Object parameterPositions, Object samplesValues, double sampleSize){}
    protected DiscreteInterpolant(){}
}

