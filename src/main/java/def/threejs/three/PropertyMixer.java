package def.threejs.three;
public class PropertyMixer extends def.js.Object {
    public PropertyMixer(Object binding, String typeName, double valueSize){}
    public Object binding;
    public double valueSize;
    public Object buffer;
    public double cumulativeWeight;
    public double useCount;
    public double referenceCount;
    native public void accumulate(double accuIndex, double weight);
    native public void apply(double accuIndex);
    native public void saveOriginalState();
    native public void restoreOriginalState();
    protected PropertyMixer(){}
}

