package def.threejs.three;
public class Interpolant extends def.js.Object {
    public Interpolant(Object parameterPositions, Object samplesValues, double sampleSize, Object resultBuffer){}
    public Object parameterPositions;
    public Object samplesValues;
    public double valueSize;
    public Object resultBuffer;
    native public Object evaluate(double time);
    public Interpolant(Object parameterPositions, Object samplesValues, double sampleSize){}
    protected Interpolant(){}
}

